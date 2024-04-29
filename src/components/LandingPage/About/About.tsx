'use client';
import { useAppSelector } from '@/redux/hooks';
import Styles from './About.module.css';
import about_img from '@/assets/about.png';
import { Col, Row } from 'antd';
import Image from 'next/image';

const About = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<h1 className={Styles.heading}>
				{getLang === 'বাং' ? 'কেন আমাদের সাথে যুক্ত হবেন ?' : 'Why Us ?'}
			</h1>
			<h3 style={{ textAlign: 'center', padding: '5px' }}>
				{getLang === 'বাং'
					? 'আমরা আপনার প্রতিদিনের দুপুরের খাবরের  নিশ্চিয়তা প্রদান করছি । আমাদের সাথে যুক্ত হয়ে জীবনকে সহজতর করে তুলুন'
					: `We will ensure your everyday's lunch and make your life easier and healthy`}
			</h3>
			<Row justify={'center'} align={'middle'} gutter={[20, 20]}>
				<Col xs={24} sm={12}>
					<Image src={about_img} alt="about_image" layout="responsive" />
				</Col>
				<Col xs={24} sm={12}>
					<p className={Styles.about_text}>
						{getLang === 'বাং'
							? 'কর্মব্যস্ত জীবনে সবচেয়ে বড় সমস্যাটি হলো অফিসে দুপুরের খাবার নিশ্চিতকরণ । এই সমস্যা সমাধানে আমরা নিয়ে এসেছি ব্যচেলর জোন । আমরা কর্মব্যাস্ত মানুষের জন্য নিয়ে এসেছি স্বল্প ব্যায়ে সর্বোচ্ছ সেবা । আমাদের সাথে যুক্ত হয়ে আপনি আপনার দুপুরের খাবারের সমস্যা স্থায়ীভাবে সমাধান করুন ।'
							: 'In work life ensuring lunch is a very big problem. To ensure lunch a person has to put 1-2 hours extra effort including his daily busy schedule.By taking our service you can easily make your life easier and solve this problem permanently '}
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default About;
