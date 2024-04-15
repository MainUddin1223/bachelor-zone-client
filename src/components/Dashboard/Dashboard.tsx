'use client';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Styles from './Dashboard.module.css';
import Profile from './Profile/Profile';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';
import NavBar from './NavBar/NavBar';

const Dashboard = () => {
	const router = useRouter();
	const userInfo: any = getAuthInfo();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	if (isLoading) return <Loader />;
	if (!userInfo) {
		router.push('/login');
		return;
	}
	if (!userInfo.is_claimed) {
		router.push('/claim');
		return;
	}
	return (
		<>
			<Header />
			<div className={Styles.container}>
				<Row gutter={[20, 20]}>
					<Col xs={24}>
						<div className={Styles.profile_container}>
							<Profile />
						</div>
					</Col>
				</Row>
			</div>
			<Footer />
		</>
	);
};

export default Dashboard;
