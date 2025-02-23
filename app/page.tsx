import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
}
