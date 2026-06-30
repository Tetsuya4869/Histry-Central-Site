import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { glossary } from '@/data/glossary';

// 用語を長い順に並べておく（最長一致を優先）
const TERMS = glossary
  .map((g) => g.term)
  .sort((a, b) => b.length - a.length);
const TERM_SET = new Set(TERMS);

/**
 * 本文中の用語集の語を、最初の1回だけ用語集ページへリンクする。
 * 過剰なリンクを避けるため、同じ語は1テキストにつき1回のみ。
 */
export default function LinkedText({ text }: { text: string }): ReactNode {
  const used = new Set<string>();
  const nodes: ReactNode[] = [];
  let buffer = '';
  let i = 0;

  const flush = () => {
    if (buffer) {
      nodes.push(<Fragment key={`t${i}-${nodes.length}`}>{buffer}</Fragment>);
      buffer = '';
    }
  };

  while (i < text.length) {
    let matched: string | null = null;
    // この位置から始まる最長の未使用用語を探す
    for (const term of TERMS) {
      if (
        !used.has(term) &&
        term.length <= text.length - i &&
        text.startsWith(term, i)
      ) {
        matched = term;
        break;
      }
    }
    if (matched && TERM_SET.has(matched)) {
      flush();
      used.add(matched);
      nodes.push(
        <Link
          key={`l${i}`}
          href={`/glossary#${matched}`}
          className="underline decoration-dotted decoration-ios-text-3 underline-offset-2 hover:decoration-ios-blue"
        >
          {matched}
        </Link>
      );
      i += matched.length;
    } else {
      buffer += text[i];
      i += 1;
    }
  }
  flush();
  return <>{nodes}</>;
}
