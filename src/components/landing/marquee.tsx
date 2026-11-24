const ITEMS = [
  "Чайники и пиалы",
  "Посуда для ресторанов",
  "Мастер-классы",
  "Дровяной обжиг",
  "Тираж от 100 изделий",
  "Глазури ручной работы",
  "Брендирование партий",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="border-y border-line bg-surface-subtle overflow-hidden py-5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-grotesk text-sm font-medium tracking-[0.16em] uppercase text-ink-soft">
              {item}
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
