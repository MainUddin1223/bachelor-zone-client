'use client';
import { Col, Row } from 'antd';
import Styles from './Pricing.module.css';
import { useAppSelector } from '@/redux/hooks';
const Pricing = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const accPricing =
		getLang == 'বাং' ? (
			<p className={Styles.price_tag}>
				<span className={Styles.price}>৳১২০০ </span> থেকে শুরু{' '}
			</p>
		) : (
			<p className={Styles.price_tag}>
				Starts from <span className={Styles.price}>৳1200</span>{' '}
			</p>
		);

	const foodPricing =
		getLang == 'বাং' ? (
			<p className={Styles.price_tag}>
				<span className={Styles.price}>৳৫০ </span> প্রতি বেলা
			</p>
		) : (
			<p className={Styles.price_tag}>
				{' '}
				<span className={Styles.price}>৳50 </span> per meal
			</p>
		);

	return (
		<div className={Styles.container}>
			<h1 className={Styles.pricing_header}>
				{getLang == 'বাং' ? 'মূল্য তালিকা' : 'Pricing'}
			</h1>
			<Row gutter={[20, 20]}>
				<Col xs={24} md={12}>
					<div className={Styles.pricing_card_container}>
						<h3 className={Styles.card_header}>
							{' '}
							{getLang == 'বাং' ? 'থাকার ব্যাবস্থা' : 'Accommodation'}
						</h3>
						<span>{accPricing}</span>
						<div className={Styles.card_points}>
							<p>{getLang == 'বাং' ? '- শেয়ার রুম' : '- Shared room'}</p>
							<p>
								{' '}
								{getLang == 'বাং'
									? '- প্রতিরুমে সর্বোচ্ছ ৫ জন'
									: '- Maximum 5 person/room '}
							</p>
							<p> {getLang == 'বাং' ? '- পানি ব্যবস্থা' : ' - 24/7 Water'}</p>
							<p> {getLang == 'বাং' ? '- ওয়াইফাই' : ' - Wifi'}</p>
							<p>{getLang == 'বাং' ? '- নিরাপত্তা' : ' - Security'}</p>
							<p>
								{' '}
								{getLang == 'বাং' ? '- বাজেট ফ্রেন্ডলি' : ' - Budget friendly'}
							</p>
						</div>
					</div>
				</Col>
				<Col xs={24} md={12}>
					<div className={Styles.pricing_card_container}>
						<h3 className={Styles.card_header}>
							{getLang == 'বাং' ? 'খাবার' : 'Food'}
						</h3>
						<span>{foodPricing}</span>
						<div className={Styles.card_points}>
							<p> {getLang == 'বাং' ? '- স্বাস্থ্যকর' : '- hygienic'}</p>
							<p> {getLang == 'বাং' ? '- সতেজ বাজার' : '- Fresh ingredient'}</p>
							<p>{getLang == 'বাং' ? '- ভেজালমুক্ত মসলা' : '- Fresh Spices'}</p>
							<p>{getLang == 'বাং' ? '- তাজা মুরগি' : '- Fresh Chicken'} </p>
							<p> {getLang == 'বাং' ? '- তাজা মাছ' : '- Fresh Fish'}</p>
							<p>
								{getLang == 'বাং'
									? '- সর্বনিম্ন ৩ ধরনের তরকারি'
									: '- Minimum 3 types of curry'}
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Pricing;
