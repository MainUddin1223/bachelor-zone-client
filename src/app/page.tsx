import Dashboard from '@/components/Dashboard/Dashboard';
import Footer from '@/components/Footer/Footer';
import About from '@/components/LandingPage/About/About';
import ContactUs from '@/components/LandingPage/ContactUs/ContactUs';
import Hero from '@/components/LandingPage/Hero/Hero';
import Pricing from '@/components/LandingPage/Pricing/Pricing';
import Services from '@/components/LandingPage/Services/Services';
import Header from '@/components/header/Header';

export default function Home() {
	return (
		<main>
			<Header />
			{/* <Dashboard/> */}
			<Hero />
			<Services />
			<Pricing />
			<About />
			{/* <ContactUs /> */}
			<Footer />
		</main>
	);
}
