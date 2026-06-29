'use client';

interface SegmentedControlProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

/** iOS風セグメンテッドコントロール（地域フィルタなどに使用） */
export default function SegmentedControl({
  options,
  value,
  onChange,
}: SegmentedControlProps) {
  return (
    <div className="ios-scroll flex gap-1 overflow-x-auto rounded-[14px] bg-ios-card-2 p-1">
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`ios-tap whitespace-nowrap rounded-[11px] px-4 py-1.5 text-[14px] font-medium transition-colors ${
              active
                ? 'bg-ios-card text-ios-text shadow-ios'
                : 'text-ios-text-2'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
