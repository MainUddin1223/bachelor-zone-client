'use client';
import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';

import Styles from './Meals.module.css';
import EditMeals from '@/components/EditMeals/EditMeals';
import { DataType, MobileDataType } from '@/type';
import { useAppSelector } from '@/redux/hooks';
import { useGetUpcomingOrdersQuery } from '@/redux/api/userApi';
import dayjs from 'dayjs';

const UpcomingMeals = () => {
	const screenSize = typeof window !== 'undefined' ? window.innerWidth : 1000;
	const isMobile = screenSize < 768;
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { data, isLoading } = useGetUpcomingOrdersQuery(undefined);
	if (isLoading) return <h1>Loading</h1>;
	const columns: TableColumnsType<DataType> = [
		{
			title: <span>{getLang === 'বাং' ? 'তারিখ' : 'Date'}</span>,
			dataIndex: 'delivery_date',
			render: (data) => {
				const date = data.split('T')[0];
				return <h4>{date}</h4>;
			},
		},
		{
			title: <span>{getLang === 'বাং' ? 'বার' : 'Day'}</span>,
			dataIndex: 'delivery_date',
			render: (data) => {
				const date = data.split('T')[0];
				const dayName = dayjs(date).format('dddd');
				return <h4>{dayName}</h4>;
			},
		},
		{
			title: <span>{getLang === 'বাং' ? 'স্ট্যাটাস' : 'Status'}</span>,
			dataIndex: 'status',
		},
		{
			title: <span>{getLang === 'বাং' ? 'স্ট্যাটাস' : 'Status'}</span>,
			dataIndex: '',
			render: (_: any, details: DataType) => {
				const orderAgain = 'আবার অর্ডার করুন';
				const cancelOrder = 'বাতিল করুন';
				return (
					<>
						{details.status == 'canceled' ? (
							<Button>{orderAgain}</Button>
						) : (
							<Button danger>{cancelOrder}</Button>
						)}
					</>
				);
			},
		},
	];

	const mobileColumns: TableColumnsType<DataType> = [
		{
			title: '',
			dataIndex: '',
			render: (_: any, details: DataType) => {
				console.log(details);
				return (
					<div>
						<h3>
							{getLang === 'বাং' ? 'তারিখ' : 'Date'} {details.delivery_date}
						</h3>
						<h3>
							{getLang === 'বাং' ? 'স্ট্যাটাস' : 'Status'} {details.status}
						</h3>

						<Button danger>
							{details.status == 'canceled' ? (
								<>{getLang === 'বাং' ? 'আবার অর্ডার করুন' : 'Order again'}</>
							) : (
								<>{getLang === 'বাং' ? 'বাতিল করুন' : 'Cancel order'}</>
							)}
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div>
			<div>
				<h3 className={Styles.meals_header}>
					{getLang === 'বাং' ? 'অর্ডরকৃত খাবার' : 'Upcoming Meals'}
				</h3>
				<p className={Styles.meals_info}>
					{getLang === 'বাং'
						? 'আপনার অর্ডরকৃত খাবার. রাত 12.59 টার আগে আপনি খাবারের পরিমাণ পরিবর্তন করতে পারেন বা  আপনার খাবাররে অর্ডার বাতিল করতে পারেন।'
						: 'Your Upcoming meals. You can change meal quantity or cancel you meal before 12.59 PM.'}
				</p>
				<div>
					<Table
						style={{ textAlign: 'center' }}
						columns={isMobile ? mobileColumns : columns}
						dataSource={Array.isArray(data.data) ? data.data : []}
						pagination={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default UpcomingMeals;
