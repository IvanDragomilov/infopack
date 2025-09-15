import { links } from "@/lib/content";

export function GettingAround() {
  return (
    <section id="around" className="mb-8">
      <h2 className="mb-2 text-xl font-bold" style={{color:'var(--heading-color)'}}>Getting Around</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Coverage: Metro/tram/bus/SKM within Zone 1 (WAW included). <a href={links.transport.tariff} target="_blank" rel="noopener" className="underline">Tariff</a></li>
        <li>Buy &amp; Validate: Use Jakdojade to buy and validate; cash not accepted on vehicles. <a href={links.transport.validate} target="_blank" rel="noopener" className="underline">Validation guide</a></li>
        <li>Night options: Night buses (N-lines) or Uber/Bolt</li>
      </ul>
    </section>
  );
}
