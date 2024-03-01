
import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Footer/Footer";
import About from "@/components/LandingPage/About/About";
import ContactUs from "@/components/LandingPage/ContactUs/ContactUs";
import Hero from "@/components/LandingPage/Hero/Hero";
import Services from "@/components/LandingPage/Services/Services";
import Header from "@/components/header/Header"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useEffect } from "react";


export default function Home() {
  return (
    <main >
      <Header />
      {/* <Dashboard/> */}
      <Hero />
      <Services />
      <About />
      <ContactUs />
      <Footer/>
    </main>
  );
}
