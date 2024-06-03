import Footer from '@/components/Footer/Footer';
import PublicHeader from '@/components/Headers/PublicHeader/PublicHeader';
import About from '@/components/LandingPage/About/About';
import DeliverySystem from '@/components/LandingPage/DeliverySystem/DeliverySystem';
import Hero from '@/components/LandingPage/Hero/Hero';
import HowToJoin from '@/components/LandingPage/HowToJoin/HowToJoin';
import HowWeWork from '@/components/LandingPage/HowWeWork/HowWeWork';
import PaymentSystem from '@/components/LandingPage/PaymentSystem/PaymentSystem';
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
			<HowToJoin />
			<PaymentSystem />
			<DeliverySystem />
			<HowWeWork />
			<About />
			{/* <ContactUs /> */}
			<Footer />
		</main>
	);
}
