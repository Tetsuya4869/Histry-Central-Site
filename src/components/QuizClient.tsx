'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { QUIZ_CATEGORIES, quizQuestions, type QuizCategory, type QuizQuestion } from '@/data/quiz';

const SESSION_LENGTH = 5;

/** ランダム化は開始操作の時だけ実行し、静的HTMLと初回描画を一致させる。 */
function chooseQuestions(category: QuizCategory | 'すべて'): QuizQuestion[] {
  const pool = quizQuestions.filter((q) => category === 'すべて' || q.category === category);
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, SESSION_LENGTH);
}

export default function QuizClient() {
  const [category, setCategory] = useState<QuizCategory | 'すべて'>('すべて');
  const [session, setSession] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const question = session[index];
  const selected = answers[index];
  const answered = selected !== undefined;
  const score = session.reduce((sum, q, i) => sum + Number(answers[i] === q.answer), 0);

  useEffect(() => {
    if (session.length > 0) headingRef.current?.focus();
  }, [session, index, finished]);

  useEffect(() => {
    if (answered && !finished) feedbackRef.current?.focus();
  }, [answered, finished]);

  function start() {
    setSession(chooseQuestions(category));
    setAnswers([]);
    setIndex(0);
    setFinished(false);
  }

  function answer(choice: number) {
    // 続けて入力されても、その問への最初の回答だけを採用する。
    setAnswers((previous) => previous.length === index ? [...previous, choice] : previous);
  }

  if (session.length === 0) {
    return (
      <section className="ios-fade-up rounded-ios-lg bg-ios-card p-5 shadow-ios sm:p-7">
        <p className="text-[12px] font-semibold tracking-widest text-ios-blue">QUIZ · LEARN · EXPLORE</p>
        <h2 className="mt-3 font-serif text-[26px] font-bold text-ios-text">5問で、世界史に寄り道。</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ios-text-2">
          文明・人物・出来事を、4択でおさらい。答えを選ぶたびに解説が読めて、気になる話は本編で深掘りできます。
        </p>
        <fieldset className="mt-6">
          <legend className="mb-3 text-[14px] font-semibold text-ios-text">出題する時代</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {(['すべて', ...QUIZ_CATEGORIES] as const).map((value) => (
              <label key={value} className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-[14px] ${category === value ? 'border-ios-blue bg-ios-blue/10 text-ios-blue' : 'border-ios-separator bg-ios-card-2 text-ios-text-2'}`}>
                <input type="radio" name="quiz-category" value={value} checked={category === value} onChange={() => setCategory(value)} className="accent-[#0A84FF]" />
                {value}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="button" onClick={start} className="ios-tap mt-6 w-full rounded-xl bg-ios-blue px-5 py-3.5 text-[16px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ios-blue">クイズをはじめる →</button>
        <p className="mt-3 text-center text-[12px] text-ios-text-3">全{quizQuestions.length}問から毎回5問を出題 · 制限時間なし</p>
      </section>
    );
  }

  if (finished) {
    return (
      <section className="ios-fade-up">
        <div className="rounded-ios-lg bg-ios-card p-6 text-center shadow-ios">
          <p className="text-[13px] font-semibold tracking-widest text-ios-blue">SESSION COMPLETE</p>
          <h2 ref={headingRef} tabIndex={-1} className="mt-3 font-serif text-[26px] font-bold text-ios-text outline-none">おつかれさまでした</h2>
          <p className="mt-4 text-[52px] font-bold tabular-nums text-ios-blue">{score}<span className="text-[24px] text-ios-text-3"> / {session.length}</span></p>
          <p className="mt-2 text-[15px] text-ios-text-2">{score === session.length ? '全問正解！ 次は本編でもう一歩深く。' : '気になった出来事を、本編でたどってみましょう。'}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={start} className="ios-tap rounded-xl bg-ios-blue px-5 py-3 font-semibold text-white">同じ時代でもう5問</button>
            <button type="button" onClick={() => { setSession([]); setAnswers([]); setFinished(false); }} className="ios-tap rounded-xl border border-ios-separator bg-ios-card-2 px-5 py-3 font-semibold text-ios-text">時代を選び直す</button>
          </div>
        </div>
        <h3 className="mb-3 mt-7 px-1 font-serif text-[20px] font-bold text-ios-text">今回の振り返り</h3>
        <ol className="space-y-3">
          {session.map((q, i) => (
            <li key={q.id} className="rounded-ios bg-ios-card p-5 shadow-ios">
              <p className={`text-[12px] font-semibold ${answers[i] === q.answer ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>{i + 1}問目 · {answers[i] === q.answer ? '✓ 正解' : 'もう一度チェック'}</p>
              <h4 className="mt-2 text-[15px] font-semibold leading-relaxed text-ios-text">{q.question}</h4>
              {answers[i] !== q.answer && <p className="mt-2 text-[13px] text-ios-text-2">あなたの回答：{q.choices[answers[i]]}</p>}
              <p className="mt-2 text-[14px] font-semibold text-ios-text">正解：{q.choices[q.answer]}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ios-text-2">{q.explanation}</p>
              <Link href={q.reading.href} className="mt-3 inline-flex min-h-11 items-center text-[14px] font-medium text-ios-blue underline underline-offset-4">{q.reading.label}を読む →</Link>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section className="ios-fade-up rounded-ios-lg bg-ios-card p-5 shadow-ios sm:p-7">
      <div className="flex items-center justify-between gap-3 text-[13px]">
        <p className="font-semibold text-ios-blue">{question.category} · 第{index + 1}問 / {session.length}問</p>
        <p className="tabular-nums text-ios-text-2">正解 {score}問</p>
      </div>
      <progress max={session.length} value={answers.length} aria-label="回答済みの問題数" className="mt-3 h-2 w-full accent-[#0A84FF]" />
      <h2 ref={headingRef} tabIndex={-1} className="mt-6 font-serif text-[21px] font-bold leading-relaxed text-ios-text outline-none">{question.question}</h2>
      <p id="quiz-instructions" className="mt-2 text-[12px] text-ios-text-3">答えを1つ選んでください。回答後に解説が表示されます。</p>
      <div className="mt-5 grid gap-3" role="group" aria-labelledby="quiz-instructions">
        {question.choices.map((choice, i) => {
          const correct = answered && i === question.answer;
          const wrong = answered && i === selected && i !== question.answer;
          return (
            <button key={choice} type="button" disabled={answered} onClick={() => answer(i)} className={`ios-tap flex min-h-14 items-center gap-3 rounded-xl border p-4 text-left text-[15px] leading-relaxed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ios-blue ${correct ? 'border-emerald-500 bg-emerald-500/10 text-ios-text' : wrong ? 'border-rose-500 bg-rose-500/10 text-ios-text' : answered ? 'border-ios-separator bg-ios-card-2 text-ios-text-3' : 'border-ios-separator bg-ios-card-2 text-ios-text hover:border-ios-blue'}`}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-[12px] font-semibold" aria-hidden="true">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{choice}</span>
              {correct && <span className="text-[12px] font-semibold">✓ 正解</span>}
              {wrong && <span className="text-[12px] font-semibold">あなたの回答</span>}
            </button>
          );
        })}
      </div>
      {answered && (
        <div ref={feedbackRef} tabIndex={-1} role="status" aria-live="polite" className="mt-6 rounded-xl bg-ios-card-2 p-4 outline-none">
          <h3 className="font-serif text-[18px] font-bold text-ios-text">{selected === question.answer ? '正解です！' : '正解は ' + String.fromCharCode(65 + question.answer) + ' です'}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-ios-text-2">{question.explanation}</p>
          <Link href={question.reading.href} className="mt-2 inline-flex min-h-11 items-center text-[14px] text-ios-blue underline underline-offset-4">{question.reading.label}を読む →</Link>
          <button type="button" onClick={() => index === session.length - 1 ? setFinished(true) : setIndex(index + 1)} className="ios-tap mt-3 block w-full rounded-xl bg-ios-blue px-5 py-3 font-semibold text-white">{index === session.length - 1 ? '結果と振り返りを見る' : '次の問題へ →'}</button>
        </div>
      )}
    </section>
  );
}
