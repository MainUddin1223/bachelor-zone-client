'use client';
import { useAppSelector } from '@/redux/hooks';
import Styles from './Register.module.css';
import { Button, Col, Input, Row, Radio } from 'antd';
import Image from 'next/image';
import register_img from '@/assets/register.png';
import Link from 'next/link';
import { useState } from 'react';
import type { RadioChangeEvent } from 'antd';

const Register = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const [value, setValue] = useState('nid');
	const getLang = basicData.lang;

	return (
		<div className={Styles.container}>
			<Row gutter={[20, 20]} align="middle" justify="center">
				<Col xs={24} md={12}>
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
								<Input placeholder="John doe" />
							</div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'ফোন নাম্বর' : 'Phone number'}</p>
								<Input type="number" placeholder="+8801*********" />
							</div>
							<div className={Styles.input_container}>
								<p>{getLang == 'বাং' ? 'ডকুমেন্টের ধরন' : 'Document type'}</p>
								<Radio.Group
									onChange={(e: RadioChangeEvent) => {
										console.log('radio checked', e.target.value);
										setValue(e.target.value);
									}}
									value={value}
								>
									<Radio value={'nid'}>
										{getLang == 'বাং' ? 'এনআইডি' : 'NID'}
									</Radio>
									<Radio value={'brn'}>
										{getLang == 'বাং' ? 'জম্মনিবন্ধন' : 'Birth Reg'}
									</Radio>
								</Radio.Group>
							</div>
							<div className={Styles.input_container}>
								<p>
									{getLang == 'বাং'
										? 'এনআইডি/জম্মনিবন্ধন নাম্বার'
										: 'NID Number / Birth reg number'}
								</p>
								<Input placeholder="2196415318" type="number" />
							</div>
							<div>
								<Button
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
