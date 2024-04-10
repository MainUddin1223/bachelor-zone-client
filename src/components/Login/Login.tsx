'use client';
import { Button, Col, Modal, Row, message } from 'antd';
import Styles from './Login.module.css';
import login_pic from '@/assets/login.png';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Input } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { useLoginMutation } from '@/redux/api/authApi';
import { useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';

const Login = () => {
	const userInfo = getAuthInfo();
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const router = useRouter();
	const [login] = useLoginMutation();
	const [isLoading, setIsLoading] = useState(false);
	const [loginData, setLoginData] = useState({
		phone: '',
		password: '',
	});

	if (userInfo) {
		router.push('/dashboard');
	}

	const handleLogin = async () => {
		try {
			setIsLoading(true);
			const res = await login({
				...loginData,
				phone: '+88' + loginData.phone,
			}).unwrap();
			if (res.success) {
				message.success('User logged in successfully');
				const accessToken = res?.accessToken;
				typeof window !== 'undefined' &&
					localStorage.setItem('accessToken', accessToken);
				router.push(`/dashboard`);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				Modal.error({
					content: res.message || 'Failed to login',
				});
			}
			setLoginData({ phone: '', password: '' });
		} catch (error) {
			setIsLoading(false);
			Modal.error({
				content: 'Failed to login',
			});
		}
	};

	return (
		<div className={Styles.container}>
			{isLoading && <h1>Loading</h1>}
			<Row gutter={[20, 20]} align="middle" justify="center">
				<Col xs={24} md={12}>
					<Image
						src={login_pic}
						width={50}
						height={50}
						alt="login_pic"
						layout="responsive"
					/>
				</Col>
				<Col xs={24} md={12}>
					<div className={Styles.form_container}>
						<h2 className={Styles.login_heading}>
							{getLang == 'বাং' ? 'লগইন করুন' : 'LOGIN'}
						</h2>
						<div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'ফোন নাম্বর' : 'Phone number'}</p>
								<Input
									value={loginData.phone}
									placeholder="+8801*********"
									onChange={(e) => {
										setLoginData({ ...loginData, phone: e.target.value });
									}}
								/>
							</div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'পাসওয়ার্ড' : 'Password'}</p>
								<Input.Password
									value={loginData.password}
									onChange={(e) => {
										setLoginData({ ...loginData, password: e.target.value });
									}}
									placeholder="********"
									type="password"
								/>
							</div>
							<div>
								<Button
									onClick={handleLogin}
									type="primary"
									style={{ display: 'block', margin: '5px auto' }}
								>
									Login
								</Button>
							</div>
						</div>
						<div className={Styles.input_container}>
							<p>
								{getLang == 'বাং'
									? 'ব্যচেলর জোনে নতুন ?'
									: 'New to Bachelor Zone ?'}{' '}
								<Link href={'/register'}>
									{' '}
									{getLang == 'বাং' ? 'রেজিস্ট্রেশন করুন' : 'Register Now'}
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

export default Login;
