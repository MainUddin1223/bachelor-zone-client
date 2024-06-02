'use client';

import BackButton from '@/components/BackButton/BackButton';
import Styles from './TeamDetails.module.css';
import Loader from '@/components/Loader/Loader';
import { useGetTeamDetailsQuery } from '@/redux/api/userApi';
import { useAppSelector } from '@/redux/hooks';
import { IMemberDataType, IOrderDataType, IOrderList } from '@/type';
import { Button, Card, Col, Row, Table, TableColumnsType } from 'antd';

const TeamDetails = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { data, isLoading } = useGetTeamDetailsQuery(undefined);
	const teamDetails = data?.teamDetails;
	const membersDetails = data?.members;
	const upcomingOrders = data?.result;
	const userColumns: TableColumnsType<IMemberDataType> = [
		{
			title: (
				<h3 style={{ paddingLeft: '10px' }}>
					{getLang === 'বাং' ? 'সদস্যদের ডাটা' : 'Members Info'}
				</h3>
			),
			dataIndex: '',
			render: (_: any, details: IMemberDataType) => {
				return (
					<div
						className={Styles.card_container}
						style={{ paddingLeft: '10px' }}
					>
						<h4>
							{getLang === 'বাং' ? 'নাম' : 'Name'} : {details?.user?.name}
						</h4>
						<h4>
							{getLang === 'বাং' ? 'মোবাইল' : 'Phone'} : {details?.user?.phone}
						</h4>
					</div>
				);
			},
		},
	];
	const orderColumn: TableColumnsType<IOrderDataType> = [
		{
			title: (
				<h3 style={{ paddingLeft: '10px' }}>
					{getLang === 'বাং' ? 'অর্ডারের বিস্তারিত' : 'Order Info'}
				</h3>
			),
			dataIndex: '',
			render: (_: any, details: IOrderDataType) => {
				return (
					<div
						className={Styles.card_container}
						style={{ paddingLeft: '10px' }}
					>
						<h4 style={{ color: 'var(--primary-color)' }}>
							{getLang === 'বাং' ? 'ডেলিভারি তারিখ' : 'Delivery Date'} :{' '}
							{details?.delivery_date}
						</h4>
						<h4>
							{getLang === 'বাং' ? 'মোট অর্ডার' : 'Total Order'} :{' '}
							{details?.order_count}
						</h4>
						<Button disabled>
							{details?.pendingOrder > 0 ? (
								<span style={{ color: 'red' }}>
									{getLang === 'বাং' ? 'ডেলিভারি রয়েছে' : ' Pending'}
								</span>
							) : (
								<span style={{ color: 'green' }}>
									{getLang === 'বাং' ? 'ডেলিভারি হয়েছে' : ' Delivered'}
								</span>
							)}
						</Button>
						<hr style={{ width: '100%', margin: '20px 0' }} />
						<div>
							<h3 style={{ marginBottom: '8px' }}>
								{getLang === 'বাং' ? 'যারা অর্ডার করেছেন' : 'Orderers'}
							</h3>
							{details.orderList.map((order: IOrderList, index: number) => (
								<div key={index}>
									<h4 style={{ padding: '5px 0' }}>
										{getLang === 'বাং' ? 'নাম' : 'User Name'} :{' '}
										{order.user_name}
									</h4>
									<h4 style={{ padding: '5px 0' }}>
										{getLang === 'বাং' ? 'মোবাইল' : 'User Phone'} :{' '}
										{order?.user_phone}
									</h4>
									<hr style={{ width: '75%', margin: '5px 0' }} />
								</div>
							))}
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className={Styles.container}>
			<BackButton />
			<h2 style={{ textAlign: 'center', margin: '15px 0' }}>Team details</h2>
			{isLoading ? (
				<Loader />
			) : (
				<Row gutter={[20, 20]}>
					<Col xs={24} lg={12}>
						<Card
							className={Styles.card_container}
							style={{ padding: '0' }}
							title={getLang === 'বাং' ? 'টিম ডাটা' : 'Team Info'}
						>
							<h4>
								{getLang === 'বাং' ? 'টিমের নাম' : 'Team Name'} :{' '}
								{teamDetails?.name}
							</h4>
							<h4>
								{getLang === 'বাং' ? 'ঠিকানা' : 'Team Address'} :{' '}
								{teamDetails?.address?.address}
							</h4>
							<h4>
								{getLang === 'বাং' ? 'টিম লিডার' : 'Leader Name '}:{' '}
								{teamDetails?.leader?.name}
							</h4>
							<h4>
								{getLang === 'বাং' ? 'মোট সদস্য' : 'Total Member'} :{' '}
								{teamDetails?.member}
							</h4>
						</Card>
					</Col>
					<Col xs={24} lg={12}>
						<div>
							<Table
								style={{ textAlign: 'center' }}
								columns={userColumns}
								dataSource={membersDetails}
								pagination={false}
							/>
						</div>
					</Col>
					<Col xs={24} lg={12}>
						<div>
							<Table
								style={{ textAlign: 'center' }}
								columns={orderColumn}
								dataSource={upcomingOrders}
								pagination={false}
							/>
						</div>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default TeamDetails;
