'use client';

import Styles from './Hero.module.css';
import { Button } from 'antd';
import { useAppSelector } from '@/redux/hooks';

const Hero = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<div className={Styles.hero_description}>
				<h1>
					{getLang === 'বাং'
						? 'সতেজ এবং স্বাস্থ্যকর দুপুরের খাবার উপভোগ করুন'
						: 'Enjoy fresh and healthy lunch'}
				</h1>
				<p>
					{getLang === 'বাং'
						? 'আপনার দুপুরের খাবার দায়িত্ব আমাদের উপর ছেড়ে দিন'
						: 'We will take care of your lunch'}
				</p>
				{/* <Button>Register Now</Button> */}
				<Button>
					{getLang === 'বাং' ? 'রেজিস্ট্রেশন করুন' : 'Register Now'}
				</Button>
			</div>
		</div>
	);
};

export default Hero;
