"use client";
/* eslint-disable @next/next/no-img-element */
import { contact, links } from "@/lib/content";

export function HeroMeetHere() {
  return (
    <section id="meet" className="mb-8">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <img src="/cic-warsaw.jpeg" alt="CIC Warsaw" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/mobad-logo-white-font.svg" alt="MOBAD" className="h-16" />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-4 shadow">
        <h1 className="text-2xl font-bold" style={{color:'var(--heading-color)'}}>Where We Meet</h1>
        <p>{contact.address}</p>
        <p>No ID needed • Guest Wi-Fi • Reception: 1st floor</p>
        <div className="mt-2 flex gap-2">
          <a href={links.cic.primary} target="_blank" rel="noopener" className="btn-primary">Open in Google Maps</a>
          <button onClick={() => navigator.clipboard.writeText(contact.address)} className="btn-secondary">Copy address</button>
        </div>
        <div className="mt-4 flex gap-4">
          <span>Let us know you’ve arrived:</span>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="underline">Call</a>
          <a href={`sms:${contact.phone.replace(/\s/g, "")}`} className="underline">Message</a>
        </div>
      </div>
    </section>
  );
}
