import type { Reference } from '@/data/histories/types';

/** 参考文献リスト（学術的な体裁） */
export default function ReferencesList({
  references,
}: {
  references: Reference[];
}) {
  return (
    <ol className="space-y-2">
      {references.map((r, i) => (
        <li
          key={i}
          className="flex gap-3 font-serif text-[13px] leading-relaxed text-ios-text-2"
        >
          <span className="shrink-0 text-ios-text-3">{i + 1}.</span>
          <span>
            {r.author && <span>{r.author}　</span>}
            <span className="text-ios-text">『{r.title}』</span>
            {r.publisher && (
              <span className="text-ios-text-3">（{r.publisher}）</span>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
