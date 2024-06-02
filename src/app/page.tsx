import Footer from '@/components/Footer/Footer';
import PublicHeader from '@/components/Headers/PublicHeader/PublicHeader';
import About from '@/components/LandingPage/About/About';
import Hero from '@/components/LandingPage/Hero/Hero';
import Pricing from '@/components/LandingPage/Pricing/Pricing';
import Services from '@/components/LandingPage/Services/Services';

export default function Home() {
	return (
		<main>
			<PublicHeader />
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
