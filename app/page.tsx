import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Tools />
      <ProblemSolution />
      <Services />
      <Process />
      <WhyUs />
      <About />
      <Testimonials />
      <Faq />
      <CtaBand />
      <Footer />
    </>
  );
}
