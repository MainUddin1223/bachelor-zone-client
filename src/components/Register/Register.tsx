'use client';
import { useAppSelector } from '@/redux/hooks';
import Styles from './Register.module.css';
import { Button, Col, Input, Row, Radio, message } from 'antd';
import Image from 'next/image';
import register_img from '@/assets/register.png';
import Link from 'next/link';
import { useState } from 'react';
import { useSignUpMutation } from '@/redux/api/authApi';
import { useRouter } from 'next/navigation';

const Register = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const [signUpData, setSignUpData] = useState({
		name: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});
	const getLang = basicData.lang;
	const router = useRouter();
	const [signUp] = useSignUpMutation();

	const handleSignUp = async () => {
		const phoneRegex = /^01\d{9}$/;
		if (!phoneRegex.test(signUpData.phone)) {
			message.error('Invalid Phone number');
			return;
		}
		if (signUpData.password !== signUpData.confirmPassword) {
			message.error('Password and confirm password not matched');
			return;
		}
		const result: any = await signUp({
			...signUpData,
			phone: '+88' + signUpData.phone,
		});
		if (result.data.success == false) {
			message.error(result.data.message);
		} else {
			message.success('Sign up successful');
			router.push('/claim');
			setSignUpData({
				name: '',
				phone: '',
				password: '',
				confirmPassword: '',
			});
		}
	};

	return (
		<div className={Styles.container}>
			<Row gutter={[20, 20]} align="middle" justify="center">
				<Col xs={24} md={12} className={Styles.register_img_container}>
					<Image
						src={register_img}
						width={50}
						height={50}
						alt="login_pic"
						layout="responsive"
					/>
				</Col>
				<Col xs={24} md={12}>
					<div className={Styles.form_container}>
						<h2 className={Styles.login_heading}>
							{getLang == 'বাং' ? 'রেজিস্ট্রেশন করুন' : 'Register Now'}
						</h2>
						<div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'নাম' : 'Name'}</p>
								<Input
									onChange={(event) => {
										setSignUpData({ ...signUpData, name: event.target.value });
									}}
									placeholder="John doe"
									value={signUpData.name}
								/>
							</div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'ফোন নাম্বর' : 'Phone number'}</p>
								<Input
									type="number"
									placeholder="01*********"
									onChange={(event) => {
										setSignUpData({ ...signUpData, phone: event.target.value });
									}}
									value={signUpData.phone}
								/>
							</div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'পাসওয়ার্ড' : 'Password'}</p>
								<Input.Password
									onChange={(event) => {
										setSignUpData({
											...signUpData,
											password: event.target.value,
										});
									}}
									placeholder="*******"
									value={signUpData.password}
								/>
							</div>
							<div className={Styles.input_container}>
								<p>
									{getLang == 'বাং'
										? 'পাসওয়ার্ড নিশ্চিত করুন'
										: 'Confirm Password'}
								</p>
								<Input.Password
									onChange={(event) => {
										setSignUpData({
											...signUpData,
											confirmPassword: event.target.value,
										});
									}}
									placeholder="*******"
									value={signUpData.confirmPassword}
								/>
							</div>
							<div>
								<Button
									onClick={handleSignUp}
									disabled={
										!signUpData.name ||
										!signUpData.confirmPassword ||
										!signUpData.password ||
										!signUpData.phone ||
										signUpData.password.length > 16 ||
										signUpData.password.length < 6 ||
										signUpData.confirmPassword.length > 16 ||
										signUpData.confirmPassword.length < 6 ||
										signUpData.phone.length !== 11
									}
									type="primary"
									style={{ display: 'block', margin: '5px auto' }}
								>
									{getLang === 'বাং' ? 'রেজিস্ট্রেশন করুন' : 'Register'}
								</Button>
							</div>
						</div>
						<div className={Styles.input_container}>
							<p>
								{getLang == 'বাং'
									? 'ব্যচেলর জোনে একাউন্ট রয়েছে ?'
									: 'Already have an account ?'}{' '}
								<Link href={'/login'}>
									{' '}
									{getLang == 'বাং' ? 'লগইন' : 'Login'}
								</Link>
							</p>
							<p className={Styles.contact_link}>
								{getLang === 'বাং'
									? 'আমাদের সাথে যোগাযোগ করুন'
									: 'Contact with us'}
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Register;
