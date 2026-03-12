import CustomRugs from "@/components/CustomRugs";
import FAQ from "@/components/FAQ";
import FeaturedRugs from "@/components/FeaturedRugs";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Process from "@/components/Process";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <FeaturedRugs/>
   <CustomRugs/>
   <Inspiration/>
   <Process/>
   <FAQ/>
   <FinalCTA/>
   </>
  );
}
