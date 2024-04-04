'use client';
import { DatePicker, Table } from 'antd';
import type { DatePickerProps, TableColumnsType } from 'antd';

import Styles from './History.module.css';
import { useAppSelector } from '@/redux/hooks';
import { useGetOrderHistoryQuery } from '@/redux/api/userApi';
import dayjs from 'dayjs';
import { DataType } from '@/type';

const History = () => {
	const screenSize = typeof window !== 'undefined' ? window.innerWidth : 1000;
	const isMobile = screenSize < 768;
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { data, isLoading } = useGetOrderHistoryQuery(undefined);
	if (isLoading) return <h1>Loading</h1>;
	console.log(data.meta);
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
			render: (data) => (
				<span style={{ textTransform: 'capitalize', fontWeight: '500' }}>
					{data == 'pending' ? (
						<p style={{ color: 'green' }}>{data}</p>
					) : (
						<p style={{ color: 'red' }}>{data}</p>
					)}
				</span>
			),
		},
	];

	const mobileColumns: TableColumnsType<DataType> = [
		{
			title: '',
			dataIndex: '',
			render: (_: any, details: DataType) => {
				const date = details.delivery_date.split('T')[0];
				return (
					<div>
						<h3>
							{getLang === 'বাং' ? 'তারিখ' : 'Date'} {date}
						</h3>
						<h3 style={{ display: 'flex', gap: '5px' }}>
							{getLang === 'বাং' ? 'স্ট্যাটাস' : 'Status'} :{' '}
							<span style={{ textTransform: 'capitalize', fontWeight: '500' }}>
								{data == 'pending' ? (
									<p style={{ color: 'green' }}>{details.status}</p>
								) : (
									<p style={{ color: 'red' }}>{details.status}</p>
								)}
							</span>
						</h3>
					</div>
				);
			},
		},
	];
	return (
		<div>
			<div>
				<h3 className={Styles.history_header}>
					{getLang === 'বাং' ? 'গ্রহনকৃত খাবারের তালিকা' : 'Meals History'}
				</h3>
				<p className={Styles.history_info}>
					{' '}
					{getLang === 'বাং'
						? `গত 30 দিনের গ্রহনকৃত খাবারের বিস্তারিত ।`
						: 'Your consumed meal details for last 30 days'}
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

export default History;
