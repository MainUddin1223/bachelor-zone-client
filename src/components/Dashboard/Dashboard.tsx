'use client';
import { Col, Row } from 'antd';
import Styles from './Dashboard.module.css';
import Profile from './Profile/Profile';

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
