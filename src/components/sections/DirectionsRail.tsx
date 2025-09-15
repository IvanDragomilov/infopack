import { links } from "@/lib/content";

const items = [
  { label: "WAW → CIC (transit)", href: links.directions.wawTransit },
  { label: "Centralna → CIC (walk)", href: links.directions.centralnaWalk },
  { label: "Rondo ONZ → CIC (walk)", href: links.directions.rondoOnzWalk },
  { label: "Śródmieście → CIC (walk)", href: links.directions.srodmiescieWalk },
];

export function DirectionsRail() {
  return (
    <section id="route" className="mb-8">
      <h2 className="mb-2 text-xl font-bold" style={{color:'var(--heading-color)'}}>Common Route to CIC</h2>
      <div className="flex gap-2 overflow-x-auto">
        {items.map((item) => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener" className="whitespace-nowrap rounded-full border px-4 py-2 text-sm hover:bg-gray-100">
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
