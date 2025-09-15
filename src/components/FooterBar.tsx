import { contact } from "@/lib/content";

export function FooterBar() {
  const today = new Date().toISOString().split("T")[0];
  return (
    <footer className="mt-12 border-t pt-4 text-sm">
      <div className="flex flex-col items-center gap-2">
        <a href={contact.website} target="_blank" rel="noopener" className="underline">{contact.website}</a>
        <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="underline">{contact.phone}</a>
        <p className="text-xs">Last updated: {today}</p>
      </div>
    </footer>
  );
}
