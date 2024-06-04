'use client';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Styles from './style.module.css';
import Image from 'next/image';
import payment_img from '@/assets/payment.png';
import { useAppSelector } from '@/redux/hooks';

const PaymentSystem = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<h1 className={Styles.header}>
				{getLang == 'বাং' ? 'কিভাবে বিল পে করবেন ?' : 'How To Pay us'}
			</h1>
			<h2 style={{ textAlign: 'center' }}>
				{getLang == 'বাং'
					? 'আমরা প্রিপেইড পেমেন্ট সিস্টেম অনুসরণ করি। আপনি আমাদের পেমেন্ট করার বিভিন্ন অপশন পাবেন।'
					: 'We follow prepaid payment system. You will get multiple options to pay us.'}
			</h2>
			<div className={Styles.delivery_terms_container}>
				<div className={Styles.img_container}>
					<Image src={payment_img} alt="delivery_img" layout="responsive" />
				</div>
				<div>
					<div className={Styles.condition_title}>
						{getLang == 'বাং'
							? 'আপনার পেমেন্ট করার জন্য এখানে রয়েছে একাধিক উপায়'
							: 'Here are multiple ways to make your payment'}{' '}
						<ArrowRightOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>
					</div>
					<div className={Styles.condition_container}>
						<div className={Styles.options}>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							<p>
								{getLang == 'বাং'
									? 'ডেলিভারি কর্মীর মাধ্যমে'
									: 'Via delivery men'}
							</p>
						</div>
						<div className={Styles.options}>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							<p>
								{getLang == 'বাং'
									? 'প্রশাসকের কাছে সরাসরি'
									: 'Direct to the admin'}
							</p>
						</div>
						<div className={Styles.options}>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							<p>
								{getLang == 'বাং'
									? 'মোবাইল ব্যাংকিংয়ের মাধ্যমে'
									: 'Via Mobile Banking'}
							</p>
						</div>
						<div className={Styles.options}>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							<p>
								{getLang == 'বাং'
									? 'ব্যাংক ট্রান্সফারের মাধ্যমে'
									: 'Via bank transfer'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentSystem;
