import { HeaderBar } from "@/components/HeaderBar";
import { SectionNav } from "@/components/SectionNav";
import { HeroMeetHere } from "@/components/sections/HeroMeetHere";
import { DirectionsRail } from "@/components/sections/DirectionsRail";
import { GettingToWarsaw } from "@/components/sections/GettingToWarsaw";
import { GettingAround } from "@/components/sections/GettingAround";
import { Hotels } from "@/components/sections/Hotels";
import { Essentials } from "@/components/sections/Essentials";
import { FooterBar } from "@/components/FooterBar";

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <SectionNav />
      <main className="mx-auto max-w-2xl p-4">
        <HeroMeetHere />
        <DirectionsRail />
        <GettingToWarsaw />
        <GettingAround />
        <Hotels />
        <Essentials />
      </main>
      <FooterBar />
    </div>
  );
}
