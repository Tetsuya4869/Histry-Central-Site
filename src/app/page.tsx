import Link from 'next/link';
import IOSNavBar from '@/components/IOSNavBar';
import TimelineChart from '@/components/TimelineChart';
import CountryCard from '@/components/CountryCard';
import WorldMap from '@/components/WorldMap';
import ThemeCard from '@/components/ThemeCard';
import { countries } from '@/data/countries';
import { themes } from '@/data/themes';
import { glossary } from '@/data/glossary';
import { getAllEvents } from '@/lib/events';
import { getAllPeople } from '@/lib/people';

const EXPLORE = [
  { href: '/events', icon: '⏳', title: '出来事をたどる', desc: '年代・地域で絞って、同じころの世界を発見' },
  { href: '/quiz', icon: '💡', title: '世界史クイズ', desc: '1回5問。解説を読んで、知識をつなごう' },
  { href: '/themes', icon: '🗺️', title: 'テーマで読む', desc: '宗教・交易・暮らし…国境を越えて読む' },
  { href: '/people', icon: '👥', title: '人物から探す', desc: '政治家から思想家まで、歴史を動かした人々' },
  { href: '/glossary', icon: '📖', title: '用語を調べる', desc: '世界史の基本概念を、やさしい言葉で' },
  { href: '/search', icon: '🔍', title: '横断検索', desc: '気になる言葉から、すべてのコンテンツへ' },
];

const JOURNEYS = [
  { title: '都市と文字のはじまり', label: '古代を歩く', icon: '🏺', desc: '川のほとりで、なぜ都市が生まれた？', links: [{ href: '/country/mesopotamia', label: 'メソポタミア' }, { href: '/country/egypt', label: 'エジプト' }, { href: '/country/india', label: 'インド' }] },
  { title: '海と砂漠を越える', label: '交流をたどる', icon: '⛵', desc: 'モノと一緒に、信仰も知識も旅をした。', links: [{ href: '/themes/trade', label: '交易の世界史' }, { href: '/country/mali', label: 'マリ' }, { href: '/country/southeast_asia', label: '東南アジア' }] },
  { title: '近代世界のつくられ方', label: '変革を読む', icon: '⚙️', desc: '革命と工業化は、人々の暮らしをどう変えた？', links: [{ href: '/country/uk', label: 'イギリス' }, { href: '/country/france', label: 'フランス' }, { href: '/country/japan', label: '日本' }] },
];

export default function HomePage() {
  const eventCount = getAllEvents().length;
  const stats = [
    { value: countries.length, label: '国・文明', href: '#civilizations' },
    { value: eventCount, label: '出来事', href: '/events' },
    { value: getAllPeople().length, label: '人物', href: '/people' },
    { value: themes.length, label: 'テーマ', href: '/themes' },
    { value: glossary.length, label: '用語', href: '/glossary' },
  ];
  const featured = ['trade', 'climate-environment', 'food-crops', 'women-rights'].flatMap((id) => themes.filter((theme) => theme.id === id));

  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="世界の歴史" />
      <main id="main-content" className="mx-auto max-w-3xl px-4">
        <section className="history-hero ios-fade-up relative mt-5 overflow-hidden rounded-ios-lg px-5 py-7 text-white sm:px-8 sm:py-9">
          <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
          <div aria-hidden="true" className="hero-orbit hero-orbit-two" />
          <div className="relative z-10">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#a9e4df]">WORLD HISTORY / 知る、つながる、発見する</p>
            <h2 className="mt-4 font-serif text-[33px] font-bold leading-snug tracking-tight sm:text-[43px]">ひとつの世界。<br />いくつもの物語。</h2>
            <p className="mt-4 max-w-[440px] text-[14px] leading-loose text-[#e0eeef]">文明のはじまりから、いまにつながる時代まで。<br className="hidden sm:block" />年表・地図・人物・テーマを行き来して、<br className="hidden sm:block" />世界史のつながりを見つけよう。</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link href="/events" className="ios-tap rounded-full bg-white px-5 py-3 text-[13px] font-bold text-[#123b43]">出来事から旅をはじめる <span aria-hidden="true">↗</span></Link>
              <Link href="/quiz" className="ios-tap rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[13px] font-semibold">クイズに挑戦</Link>
            </div>
            <div aria-hidden="true" className="mt-8 flex items-center gap-2 text-[10px] tracking-wider text-[#b8d5da]">
              <span>BC3500</span><span className="h-px flex-1 bg-white/25" /><span>文明の交差点を旅する</span><span className="h-px flex-1 bg-white/25" /><span>現代</span>
            </div>
          </div>
        </section>

        <nav aria-label="収録コンテンツ" className="my-4 grid grid-cols-5 divide-x divide-[var(--ios-separator)] rounded-ios bg-ios-card py-4 shadow-ios">
          {stats.map((stat) => <Link key={stat.label} href={stat.href} className="ios-tap text-center"><span className="block font-serif text-[23px] font-bold tabular-nums text-ios-text sm:text-[27px]">{stat.value}</span><span className="mt-0.5 block text-[10px] text-ios-text-2 sm:text-[12px]">{stat.label}</span></Link>)}
        </nav>

        <section className="ios-fade-up pt-3" aria-labelledby="explore-heading">
          <h2 id="explore-heading" className="mb-3 px-1 font-serif text-[21px] font-bold">今日は、どこから？</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {EXPLORE.map((item) => <Link key={item.href} href={item.href} className="ios-tap rounded-ios bg-ios-card p-4 shadow-ios transition-shadow hover:shadow-ios-lg"><span aria-hidden="true" className="text-[27px]">{item.icon}</span><h3 className="mt-2 font-serif text-[15px] font-bold">{item.title}<span aria-hidden="true" className="ml-1 text-ios-blue">↗</span></h3><p className="mt-1.5 text-[12px] leading-relaxed text-ios-text-2">{item.desc}</p></Link>)}
          </div>
        </section>

        <section className="ios-fade-up pt-8" aria-labelledby="journeys-heading">
          <p className="px-1 text-[11px] font-semibold tracking-widest text-ios-blue">READING JOURNEYS</p>
          <h2 id="journeys-heading" className="mb-3 mt-1 px-1 font-serif text-[21px] font-bold">迷ったら、この読み順で</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {JOURNEYS.map((journey) => <article key={journey.title} className="rounded-ios border border-[var(--ios-separator)] bg-ios-card p-4"><span aria-hidden="true" className="text-2xl">{journey.icon}</span><p className="mt-3 text-[10px] font-semibold tracking-wider text-ios-blue">{journey.label}</p><h3 className="mt-1 font-serif text-[16px] font-bold">{journey.title}</h3><p className="mt-2 text-[12px] leading-relaxed text-ios-text-2">{journey.desc}</p><ol className="mt-4 space-y-1">{journey.links.map((link, index) => <li key={link.href}><Link href={link.href} className="flex min-h-10 items-center gap-2 text-[12px] font-medium text-ios-blue"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ios-card-2 text-[10px] text-ios-text-2">{index + 1}</span>{link.label}<span aria-hidden="true">›</span></Link></li>)}</ol></article>)}
          </div>
        </section>

        <section id="timeline" className="ios-fade-up scroll-mt-20 pt-8" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="px-1 font-serif text-[21px] font-bold">時代を俯瞰する</h2>
          <p className="mb-4 mt-1 px-1 text-[13px] text-ios-text-2">同じ時代に、どんな国や文明があっただろう。</p>
          <TimelineChart />
        </section>

        <section className="ios-fade-up pt-8" aria-labelledby="map-heading">
          <h2 id="map-heading" className="mb-3 px-1 font-serif text-[21px] font-bold">地図をひらく</h2>
          <div className="rounded-ios-lg bg-ios-card p-3 shadow-ios"><WorldMap /><p className="mt-2 text-center text-[11px] text-ios-text-3">ピンをタップで各文明の歴史へ／色は中心地の目安</p></div>
        </section>

        <section className="ios-fade-up pt-8" aria-labelledby="themes-heading">
          <div className="mb-3 flex items-baseline justify-between gap-3 px-1"><h2 id="themes-heading" className="font-serif text-[21px] font-bold">暮らしから世界史へ</h2><Link href="/themes" className="text-[12px] font-semibold text-ios-blue">全{themes.length}テーマを見る ›</Link></div>
          <div className="grid gap-3 sm:grid-cols-2">{featured.map((theme) => <ThemeCard key={theme.id} theme={theme} />)}</div>
        </section>

        <section id="civilizations" className="ios-fade-up scroll-mt-20 pt-8" aria-labelledby="civilizations-heading">
          <h2 id="civilizations-heading" className="mb-3 px-1 font-serif text-[21px] font-bold">国・文明から探す <span className="text-[14px] font-normal text-ios-text-3">{countries.length}</span></h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">{[...countries].sort((a, b) => a.spans[0].start - b.spans[0].start).map((country) => <CountryCard key={country.id} country={country} />)}</div>
        </section>

        <footer className="mt-10 border-t border-[var(--ios-separator)] pb-4 pt-6 text-center text-[11px] leading-relaxed text-ios-text-3"><p className="font-serif text-[16px] font-bold text-ios-text-2">歴史を知ると、世界が少し広くなる。</p><p className="mt-2">史実をもとにした概略です。年代や解釈には諸説があります。</p><Link href="/about" className="mt-2 inline-block min-h-10 py-2 text-ios-blue">編集方針・参考文献について</Link></footer>
      </main>
    </div>
  );
}
