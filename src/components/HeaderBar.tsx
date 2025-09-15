import Link from "next/link";
import { contact } from "@/lib/content";

export function HeaderBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white/80 backdrop-blur p-2 text-sm">
      <nav className="flex gap-4">
        <Link href={contact.website} target="_blank" rel="noopener" className="underline">Website</Link>
        <a href={`mailto:${contact.email}`} className="underline">Email</a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="underline">{contact.phone}</a>
      </nav>
      <div className="font-bold">Emergency: {contact.emergency.general} • {contact.emergency.city}</div>
    </header>
  );
}
