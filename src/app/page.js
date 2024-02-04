
import { Navbar } from "@/components/Navbar/Navbar";
import Image from "next/image";
import WhyChooseMe from "./WhyChooseMe/page";
import AboutMe from "./about/page";
import CaseStudies from "./CaseStudies/page";
import Footer from "@/components/Footer/page";
import AboutAndContactSection from "@/components/AboutAndContact/page";
import About from "@/components/About/About";


export default function Home() {
  return <div>
   
  <WhyChooseMe/>
  <About />
  <CaseStudies/>
  <AboutAndContactSection/>

   </div>;
}
