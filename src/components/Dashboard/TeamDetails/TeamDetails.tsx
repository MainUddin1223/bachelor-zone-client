'use client';

import BackButton from '@/components/BackButton/BackButton';
import Styles from './TeamDetails.module.css';
import Loader from '@/components/Loader/Loader';
import { useGetTeamDetailsQuery } from '@/redux/api/userApi';
import { useAppSelector } from '@/redux/hooks';
import { IMemberDataType, IOrderDataType, IOrderList } from '@/type';
import { Card, Col, Row, Table, TableColumnsType } from 'antd';

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
				<h4 style={{ paddingLeft: '10px' }}>
					{getLang === 'বাং' ? 'সদস্যদের ডাটা' : 'Members Info'}
				</h4>
			),
			dataIndex: '',
			render: (_: any, details: IMemberDataType) => {
				return (
					<div style={{ paddingLeft: '10px' }}>
						<h5>
							{getLang === 'বাং' ? 'নাম' : 'Name'} : {details?.user?.name}
						</h5>
						<h5>
							{getLang === 'বাং' ? 'মোবাইল' : 'Phone'} : {details?.user?.phone}
						</h5>
					</div>
				);
			},
		},
	];
	const orderColumn: TableColumnsType<IOrderDataType> = [
		{
			title: (
				<h4 style={{ paddingLeft: '10px' }}>
					{getLang === 'বাং' ? 'অর্ডারের বিস্তারিত' : 'Order Info'}
				</h4>
			),
			dataIndex: '',
			render: (_: any, details: IOrderDataType) => {
				return (
					<div style={{ paddingLeft: '10px' }}>
						<h5 style={{ color: 'var(--primary-color)' }}>
							{getLang === 'বাং' ? 'ডেলিভারি তারিখ' : 'Delivery Date'} :{' '}
							{details?.delivery_date}
						</h5>
						<h5>
							{getLang === 'বাং' ? 'মোট অর্ডার' : 'Total Order'} :{' '}
							{details?.order_count}
						</h5>
						<hr style={{ width: '30%', margin: '10px 0' }} />
						<div>
							<h4 style={{ marginBottom: '8px' }}>
								{getLang === 'বাং' ? 'যারা অর্ডার করেছেন' : 'Orderers'}
							</h4>
							{details.orderList.map((order: IOrderList, index: number) => (
								<div key={index}>
									<h6 style={{ padding: '5px 0' }}>
										{getLang === 'বাং' ? 'নাম' : 'User Name'} :{' '}
										{order.user_name}
									</h6>
									<h6 style={{ padding: '5px 0' }}>
										{getLang === 'বাং' ? 'মোবাইল' : 'User Phone'} :{' '}
										{order?.user_phone}
									</h6>
									<hr style={{ width: '30%', margin: '5px 0' }} />
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
							style={{ padding: '0' }}
							title={getLang === 'বাং' ? 'টিম ডাটা' : 'Team Info'}
						>
							<h5>
								{getLang === 'বাং' ? 'টিমের নাম' : 'Team Name'} :{' '}
								{teamDetails?.name}
							</h5>
							<h5>
								{getLang === 'বাং' ? 'ঠিকানা' : 'Team Address'} :{' '}
								{teamDetails?.address?.address}
							</h5>
							<h5>
								{getLang === 'বাং' ? 'টিম লিডার' : 'Leader Name '}:{' '}
								{teamDetails?.leader?.name}
							</h5>
							<h5>
								{getLang === 'বাং' ? 'মোট সদস্য' : 'Total Member'} :{' '}
								{teamDetails?.member}
							</h5>
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