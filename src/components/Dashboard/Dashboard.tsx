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
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const Dashboard = () => {
	return (
		<div className={Styles.container}>
			<Row gutter={[20, 20]}>
				<Col xs={24}>
					<div className={Styles.profile_container}>
						<Profile />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Dashboard;
