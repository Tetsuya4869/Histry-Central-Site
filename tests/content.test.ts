import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countries } from '../src/data/countries';
import { histories } from '../src/data/histories';
import { geo } from '../src/data/geo';
import { themes } from '../src/data/themes';
import { glossary } from '../src/data/glossary';
import { QUIZ_CATEGORIES, quizQuestions } from '../src/data/quiz';
import { eventAnchor, getAllEvents } from '../src/lib/events';
import { filterEvents, type WorldEvent } from '../src/lib/event-filters';
import { buildSearchIndex } from '../src/lib/search';
import { generateTicks } from '../src/lib/timeline';

const countryIds = new Set(countries.map((country) => country.id));
const themeIds = new Set(themes.map((theme) => theme.id));

test('every civilization has a unique route, history, map location and valid spans', () => {
  assert.equal(countryIds.size, countries.length);
  assert.equal(Object.keys(histories).length, countries.length);
  for (const country of countries) {
    const history = histories[country.id];
    assert.equal(history?.id, country.id);
    assert.ok(geo[country.id], country.id);
    assert.ok(history.eras.length > 0, country.id);
    assert.ok(country.spans.every((span) => span.start < span.end), country.id);
  }
});

test('all new histories have substantial source-aware coverage', () => {
  for (const id of ['ethiopia', 'swahili', 'portugal', 'poland']) {
    const history = histories[id];
    assert.ok(history.eras.length >= 4, id);
    assert.ok(history.figures && history.figures.length >= 5, id);
    assert.ok(history.references && history.references.length >= 2, id);
    assert.ok(history.overview && history.legacy, id);
    for (const era of history.eras) {
      assert.ok(era.themes && era.themes.length >= 2, `${id}/${era.name}`);
      assert.ok(era.events && era.events.length >= 4, `${id}/${era.name}`);
      assert.deepEqual(era.events.map((e) => e.year), era.events.map((e) => e.year).sort((a, b) => a - b), `${id}/${era.name}`);
    }
  }
});

test('events are unique, chronologically sorted and point to the matching body anchor', () => {
  const events = getAllEvents();
  assert.equal(new Set(events.map((event) => event.id)).size, events.length);
  assert.deepEqual(events.map((e) => e.year), events.map((e) => e.year).sort((a, b) => a - b));
  let total = 0;
  for (const country of countries) {
    histories[country.id].eras.forEach((era, eraIndex) => {
      (era.events ?? []).forEach((event, eventIndex) => {
        total++;
        const indexed = events.find((item) => item.id === `${country.id}-${eraIndex}-${eventIndex}`);
        assert.equal(indexed?.href, `/country/${country.id}#${eventAnchor(eraIndex, eventIndex)}`);
        assert.equal(indexed?.text, event.text);
        assert.notEqual(event.year, 0, 'historical events have no year zero');
      });
    });
  }
  assert.equal(events.length, total);
});

test('period filters partition boundary years and combine region and keyword conditions', () => {
  const fixture = [-550, 499, 500, 1499, 1500, 1799, 1800, 1945, 1946].map((year) => ({
    id: String(year), year, text: '統一 と 交易', countryId: 'persia', countryName: 'ペルシア', flag: '🇮🇷', region: '中東', eraName: '王朝', href: '/',
  })) satisfies WorldEvent[];
  assert.deepEqual(filterEvents(fixture, { period: 'ancient' }).map((e) => e.year), [-550, 499]);
  assert.deepEqual(filterEvents(fixture, { period: 'medieval' }).map((e) => e.year), [500, 1499]);
  assert.deepEqual(filterEvents(fixture, { period: 'early-modern' }).map((e) => e.year), [1500, 1799]);
  assert.deepEqual(filterEvents(fixture, { period: 'modern' }).map((e) => e.year), [1800, 1945]);
  assert.deepEqual(filterEvents(fixture, { period: 'contemporary' }).map((e) => e.year), [1946]);
  assert.equal(filterEvents(fixture, { query: 'bc550 ペルシア', region: '中東' }).length, 1);
  assert.equal(filterEvents(fixture, { query: ' 紀元前550　交易 ' }).length, 1);
  assert.equal(filterEvents(fixture, { query: '統一 交易', region: 'ヨーロッパ' }).length, 0);
  assert.equal(filterEvents(fixture, { query: 'ない言葉' }).length, 0);
  assert.equal(fixture.length, 9, 'filter does not mutate the input');
});

test('theme and quiz reading links resolve to existing routes', () => {
  assert.equal(themeIds.size, themes.length);
  for (const theme of themes) {
    for (const id of [...theme.relatedCountryIds, ...theme.sections.flatMap((section) => section.relatedCountryIds ?? [])]) {
      assert.ok(countryIds.has(id), `${theme.id}: unknown civilization ${id}`);
    }
  }
  assert.equal(new Set(quizQuestions.map((q) => q.id)).size, quizQuestions.length);
  for (const question of quizQuestions) {
    assert.equal(question.choices.length, 4, question.id);
    assert.equal(new Set(question.choices).size, 4, question.id);
    assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4, question.id);
    assert.ok(question.explanation.length >= 30, question.id);
    const [, route, id] = question.reading.href.split('/');
    assert.ok(route === 'country' ? countryIds.has(id) : route === 'themes' && themeIds.has(id), question.id);
  }
  for (const category of QUIZ_CATEGORIES) {
    assert.ok(quizQuestions.filter((q) => q.category === category).length >= 5, category);
  }
});

test('glossary terms are unique, search includes every event, and timeline has one tick per year', () => {
  assert.equal(new Set(glossary.map((term) => term.term)).size, glossary.length);
  const search = buildSearchIndex();
  assert.equal(search.filter((item) => item.kind === '出来事').length, getAllEvents().length);
  const ticks = generateTicks();
  assert.equal(new Set(ticks.map((tick) => tick.year)).size, ticks.length);
  assert.equal(ticks.filter((tick) => tick.year === 0).length, 1);
});
