import { links } from "@/lib/content";

const hotels = [
  { name: "NYX Hotel Warsaw", info: "Varso complex", data: links.hotels.nyx },
  { name: "InterContinental Warsaw", data: links.hotels.intercontinental },
  { name: "Warsaw Marriott Hotel", data: links.hotels.marriott },
  { name: "Polonia Palace Hotel", data: links.hotels.polonia },
  { name: "Holiday Inn Warsaw City Centre", data: links.hotels.holidayInn },
];

export function Hotels() {
  return (
    <section id="hotels" className="mb-8">
      <h2 className="mb-2 text-xl font-bold" style={{color:'var(--heading-color)'}}>Hotels</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {hotels.map((h) => (
          <div key={h.name} className="rounded border p-4">
            <h3 className="font-semibold" style={{color:'var(--heading-color)'}}>{h.name}</h3>
            {h.info && <p className="text-sm">{h.info}</p>}
            <div className="mt-2 flex gap-2 text-sm">
              <a href={h.data.map} target="_blank" rel="noopener" className="underline">Open in Maps</a>
              <a href={h.data.directions} target="_blank" rel="noopener" className="underline">Directions from CIC</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
