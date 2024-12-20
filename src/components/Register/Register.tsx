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
import { getAuthInfo } from '@/utils/jwt';

const Register = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const [isLoading, setIsLoading] = useState(false);
	const userInfo: any = getAuthInfo();
	const [signUpData, setSignUpData] = useState({
		name: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});
	const getLang = basicData.lang;
	const router = useRouter();
	const [signUp] = useSignUpMutation();
	if (userInfo) {
		if (userInfo?.is_claimed == false) {
			router.push(`/claim`);
		} else {
			router.push(`/user`);
		}
	}

	const handleSignUp = async () => {
		setIsLoading(true);
		const phoneRegex = /^(01|\+8801)\d{9}$/;
		if (!phoneRegex.test(signUpData.phone)) {
			message.error('Invalid Phone number');
			setIsLoading(false);
			return;
		}
		if (signUpData.password !== signUpData.confirmPassword) {
			message.error('Password and confirm password not matched');
			setIsLoading(false);
			return;
		}
		const result: any = signUpData.phone.startsWith('0')
			? await signUp({
					...signUpData,
					phone: '+88' + signUpData.phone,
				})
			: signUp(signUpData);
		if (result.data.success == false) {
			setIsLoading(false);
			message.error(result.data.message);
		} else {
			message.success('Sign up successful');
			setIsLoading(false);
			router.push('/claim');
			setSignUpData({
				name: '',
				phone: '',
				password: '',
				confirmPassword: '',
			});
			const accessToken = result.data.accessToken;
			typeof window !== 'undefined' &&
				localStorage.setItem('accessToken', accessToken);
		}
	};

	return (
		<div className={Styles.container}>
			<Row gutter={[20, 20]} align="middle" justify="center">
				<Col xs={24} md={12}>
					<div className={Styles.image_container}>
						<Image
							src={register_img}
							width={50}
							height={50}
							alt="login_pic"
							layout="responsive"
						/>
					</div>
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
									loading={isLoading}
									onClick={handleSignUp}
									disabled={
										signUpData.phone.length == 11 ||
										signUpData.phone.length == 14
											? !signUpData.name ||
												!signUpData.confirmPassword ||
												!signUpData.password ||
												!signUpData.phone ||
												signUpData.password.length > 16 ||
												signUpData.password.length < 6 ||
												signUpData.confirmPassword.length > 16 ||
												signUpData.confirmPassword.length < 6
												? true
												: false
											: true
									}
									style={{
										margin: '10px auto',
										display: 'block',
										backgroundColor: 'var(--brand-color)',
									}}
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
