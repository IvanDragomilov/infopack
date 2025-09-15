const sections = [
  { id: "meet", label: "Where We Meet" },
  { id: "route", label: "Common Route" },
  { id: "arrive", label: "Getting to Warsaw" },
  { id: "around", label: "Getting Around" },
  { id: "hotels", label: "Hotels" },
  { id: "essentials", label: "Essentials" },
];

export function SectionNav() {
  return (
    <nav className="hidden lg:fixed lg:top-20 lg:left-4 lg:block">
      <ul className="space-y-2 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="underline">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
