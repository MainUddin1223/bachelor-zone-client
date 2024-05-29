'use client';

import Loader from '@/components/Loader/Loader';
import { useGetTeamDetailsQuery } from '@/redux/api/userApi';
import { Card, Col, Row } from 'antd';

const TeamDetails = () => {
	const { data, isLoading } = useGetTeamDetailsQuery(undefined);
	const teamDetails = data?.teamDetails;
	const membersDetails = data?.teamDetails;
	const upcomingOrders = data?.result;
	return (
		<div>
			<h2>Team details</h2>
			{isLoading ? (
				<Loader />
			) : (
				<Row gutter={[20, 20]}>
					<Col sm={24} md={12}>
						<Card title="Team Info">
							<h5>Team Name : {teamDetails?.name}</h5>
							<h5>Team Address : {teamDetails?.address?.address}</h5>
							<h5>Leader Name : {teamDetails?.leader?.name}</h5>
							<h5>Total Member : {teamDetails?.member}</h5>
						</Card>
					</Col>
					<Col sm={24} md={12}>
						<Card title="Member Info"></Card>
					</Col>
					<Col sm={24} md={12}>
						<Card title="Upcoming Orders"></Card>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default TeamDetails;
