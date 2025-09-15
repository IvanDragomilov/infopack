import { links } from "@/lib/content";

export function GettingToWarsaw() {
  return (
    <section id="arrive" className="mb-8">
      <h2 className="mb-2 text-xl font-bold" style={{color:'var(--heading-color)'}}>Getting to Warsaw</h2>
      <div className="space-y-2">
        <p><a href={links.airports.waw.map} target="_blank" rel="noopener" className="underline">WAW Airport</a> – easy public transport (<a href={links.airports.waw.transport} target="_blank" rel="noopener" className="underline">details</a>)</p>
        <p><a href={links.airports.wmi.map} target="_blank" rel="noopener" className="underline">WMI Airport</a> – train via <a href={links.airports.wmi.station} target="_blank" rel="noopener" className="underline">Modlin station</a></p>
        <p>Alt airports (easy by train): KRK, GDN, KTW</p>
        <p>
          Long-distance: <a href={links.transport.pkp} target="_blank" rel="noopener" className="underline">PKP Intercity</a>, <a href={links.transport.polishTrains} target="_blank" rel="noopener" className="underline">PolishTrains</a>, <a href={links.transport.flixbus} target="_blank" rel="noopener" className="underline">FlixBus</a>
        </p>
        <p>Prefer a car? Take Taxi → <a href="#taxi" className="underline">jump to Taxi</a></p>
      </div>
    </section>
  );
}
