import { Col, Flex, Row } from 'antd';
import React from 'react';
import Styles from './Dashboard.module.css';
import Profile from './Profile/Profile';
import Statics from './Statics/Statics';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import History from './History/History';
import Meals from './Meals/Meals';
import Order from './Order/Order';

const Dashboard = () => {
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
					<Col xs={24}>
						<Order />
					</Col>
					<Col xs={24} sm={12}></Col>
					<Col xs={24}>
						<Meals />
					</Col>
					<Col xs={24}>
						<History />
					</Col>
				</Row>
			</div>
			<Footer />
		</>
	);
};

export default Dashboard;
