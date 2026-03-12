import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import MaterialsSection from "@/components/about/MaterialsSection";
import OurStory from "@/components/about/OurStory";
import StudioSection from "@/components/about/StudioSection";
import FinalCTA from "@/components/FinalCTA";

export default function AboutPage() {
  return (
    <main className="pt-24 pb-32 space-y-32">

      <AboutHero />
    <OurStory/>


      <MaterialsSection/>
      <StudioSection/>
    <AboutCTA/>
    </main>
  );
}