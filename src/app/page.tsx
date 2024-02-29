
import Dashboard from "@/components/Dashboard/Dashboard";
import About from "@/components/LandingPage/About/About";
import Hero from "@/components/LandingPage/Hero/Hero";
import Services from "@/components/LandingPage/Services/Services";
import Header from "@/components/header/Header"


export default function Home() {
  return (
    <main >
      <Header />
      {/* <Dashboard/> */}
      <Hero />
      <Services />
      <About/>
    </main>
  );
}
