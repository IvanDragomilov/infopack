import { links } from "@/lib/content";

export function Essentials() {
  return (
    <section id="essentials" className="mb-8">
      <h2 className="mb-2 text-xl font-bold" style={{color:'var(--heading-color)'}}>Essentials</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold" style={{color:'var(--heading-color)'}}>Essential Apps</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>Jakdojade: <a href={links.apps.jakdojade.ios} target="_blank" rel="noopener" className="underline">iOS</a>, <a href={links.apps.jakdojade.android} target="_blank" rel="noopener" className="underline">Android</a></li>
            <li>Uber: <a href={links.apps.uber.ios} target="_blank" rel="noopener" className="underline">iOS</a>, <a href={links.apps.uber.android} target="_blank" rel="noopener" className="underline">Android</a></li>
            <li>Bolt: <a href={links.apps.bolt.ios} target="_blank" rel="noopener" className="underline">iOS</a>, <a href={links.apps.bolt.android} target="_blank" rel="noopener" className="underline">Android</a></li>
          </ul>
        </div>
        <div id="taxi">
          <h3 className="font-semibold" style={{color:'var(--heading-color)'}}>Taxi</h3>
          <p className="text-sm">Uber &amp; Bolt are widely used and affordable in Warsaw.</p>
        </div>
        <div>
          <h3 className="font-semibold" style={{color:'var(--heading-color)'}}>Currency</h3>
          <p className="text-sm">Nearby ATMs <a href={links.money.atms} target="_blank" rel="noopener" className="underline">search</a></p>
          <ul className="list-disc pl-5 text-sm">
            {links.money.kantors.map((k) => (
              <li key={k}><a href={k} target="_blank" rel="noopener" className="underline">Exchange office</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold" style={{color:'var(--heading-color)'}}>Phrases &amp; Culture</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>Dzień dobry — Good day</li>
            <li>Dziękuję — Thank you</li>
            <li>Przepraszam — Sorry/Excuse me</li>
          </ul>
          <a href={links.city.go2warsaw} target="_blank" rel="noopener" className="underline">More at go2warsaw</a>
        </div>
      </div>
    </section>
  );
}
