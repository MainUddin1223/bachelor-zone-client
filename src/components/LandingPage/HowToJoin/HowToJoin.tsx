'use client';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Styles from './style.module.css';
import Image from 'next/image';
import system_img from '@/assets/how_to_join.png';
import { Steps } from 'antd';
import { costing } from '@/utils/cost';
import { useAppSelector } from '@/redux/hooks';

const HowToJoin = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<h1 className={Styles.header}>
				{getLang == 'বাং' ? 'কিভাবে জয়েন করবেন ?' : 'How to join us'}
			</h1>
			<h2 style={{ textAlign: 'center' }}>
				{getLang == 'বাং'
					? 'আমরা আপনার জীবনকে সহজ এবং সুন্দর করে তুলতে প্রতিশ্রুতিবদ্ধ। আপনাকে দিচ্ছি অনন্য সেবা ও বিশেষ যত্ন।'
					: 'We will make your life easier. Join us and experience unparalleled service at the next level.'}
			</h2>
			<div className={Styles.delivery_terms_container}>
				<div className={Styles.condition_container}>
					<div className={Styles.condition_title}>
						{getLang == 'বাং'
							? 'আমাদের সাথে যোগ দিতে হলে নিচের প্রক্রিয়া অনুসরণ করুন'
							: 'To join us, please follow the process outlined below'}{' '}
						<ArrowRightOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>
					</div>
					<Steps
						current={3}
						direction="vertical"
						items={[
							{
								title: (
									<h4>{getLang == 'বাং' ? 'রেজিস্ট্রেশন' : 'Registration'}</h4>
								),
								description: (
									<div className={Styles.description_container}>
										<p style={{ fontSize: '15px' }}>
											<b>
												{getLang == 'বাং' ? 'যা প্রয়োজন ' : 'Requirements '}:
											</b>
										</p>
										<p>
											{getLang == 'বাং'
												? 'আপনার ফোন নম্বর '
												: 'Your phone number'}
										</p>
										<p>{getLang == 'বাং' ? 'আপনার নাম ' : 'Your name '}</p>
										<p>{getLang == 'বাং' ? 'পাসওয়ার্ড ' : 'Password '}</p>
									</div>
								),
							},
							{
								title: (
									<h4>
										{getLang == 'বাং'
											? 'আপনার একাউন্ট সচল করুন '
											: 'Activate your account '}
									</h4>
								),
								description: (
									<div className={Styles.description_container}>
										<p>
											{getLang == 'বাং'
												? 'নিবন্ধন সম্পন্ন হলে, আপনার অ্যাকাউন্টটি আমাদের দ্বারা অ্যাক্টিভেট করতে হবে। এটা সম্পন্ন করতে আমাদের সাথে যোগাযোগ করতে হবে.'
												: 'After completing registration you have to contact with us to activate your account '}
										</p>
										<p style={{ fontSize: '15px' }}>
											<b>
												{getLang == 'বাং' ? 'যা প্রয়োজন ' : 'Requirements '}:
											</b>
										</p>
										<p>
											1.{getLang == 'বাং' ? 'আপনার ঠিকানা ' : 'Your address '}{' '}
										</p>
										<p>
											2.{' '}
											{getLang == 'বাং'
												? 'একটি টিম সিলেক্ট করুন'
												: 'Choose a team '}
										</p>
									</div>
								),
							},
							{
								title: (
									<h4>
										{getLang == 'বাং'
											? 'প্রাথমিক  পেমেন্ট '
											: 'Initial Payment '}
									</h4>
								),
								description: (
									<div className={Styles.description_container}>
										<p>
											{getLang == 'বাং'
												? 'আপনার অ্যাকাউন্ট অ্যাক্টিভেট করার সময় ৳ 500 পরিশোধ করতে হবে। '
												: 'You have to pay ৳ 500 while activating your account'}
										</p>
										<p style={{ fontSize: '15px' }}>
											<b>{getLang == 'বাং' ? 'বিবরণ ' : 'Distribution'} :</b>
										</p>
										<p>
											1.{' '}
											{getLang == 'বাং' ? 'টিফিন বাক্স ফি ' : 'Tiffin box fee '}{' '}
											: {costing.tiffinBoxFee}
										</p>
										<p>
											2. {getLang == 'বাং' ? 'নিবন্ধন ফি' : 'Registration Fee '}{' '}
											: {costing.tiffinBoxFee} : {costing?.registrationFee}
										</p>
										<p>
											3.{' '}
											{getLang == 'বাং'
												? 'ব্যালেন্স রিচার্জ'
												: 'Balance recharge '}{' '}
											: {costing?.minimumRecharge}
										</p>
										<p>
											{getLang == 'বাং'
												? `বি.দ্র.  ৳ 275 আপনার অ্যাকাউন্টে যোগ হবে।`
												: `											NB : ৳ ${costing?.minimumRecharge} will add in your
											account.`}
										</p>
									</div>
								),
							},
						]}
					/>
				</div>
				<div className={Styles.img_container}>
					<Image src={system_img} alt="delivery_img" layout="responsive" />
				</div>
			</div>
		</div>
	);
};

export default HowToJoin;
