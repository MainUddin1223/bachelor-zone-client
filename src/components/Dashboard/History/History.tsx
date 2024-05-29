'use client';
import { Card, DatePicker, Table } from 'antd';
import type { DatePickerProps, TableColumnsType } from 'antd';

import Styles from './History.module.css';
import { useAppSelector } from '@/redux/hooks';
import { useGetOrderHistoryQuery } from '@/redux/api/userApi';
import dayjs from 'dayjs';
import { DataType } from '@/type';
import Loader from '@/components/Loader/Loader';

const History = () => {
	const screenSize = typeof window !== 'undefined' ? window.innerWidth : 1000;
	const isMobile = screenSize < 768;
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { data, isLoading } = useGetOrderHistoryQuery(undefined);
	const config = {
		current: data?.meta?.currentPage,
		pageSize: data?.meta.size,
		total: data?.meta.totalPage,
	};
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
					{data == 'received' ? (
						<p style={{ color: 'green' }}>Received</p>
					) : (
						<p style={{ color: 'red' }}>
							{data === 'canceled' ? data : 'Not received'}
						</p>
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
								{details.status == 'received' ? (
									<p style={{ color: 'green' }}>Received</p>
								) : (
									<p style={{ color: 'red' }}>
										{details.status === 'cancel'
											? details.status
											: 'Not received'}
									</p>
								)}
							</span>
						</h3>
					</div>
				);
			},
		},
	];
	const orderStatics = data?.data?.orderData;
	return (
		<div>
			<div>
				<h3 className={Styles.history_header}>
					{getLang === 'বাং' ? 'গ্রহনকৃত খাবার' : 'Meals History'}
				</h3>
				{isLoading ? (
					<Loader />
				) : (
					<div>
						<Card>
							<h3>
								{getLang === 'বাং'
									? `${dayjs(Date.now()).format('DD-MM-YYYY')} পর্যন্ত খাবারের পরিসংখ্যান`
									: `Your Order statics till ${dayjs(Date.now()).format('DD-MM-YYYY')}`}
							</h3>
							{getLang === 'বাং' ? (
								<div>
									<p>
										মোট অর্ডার : <b>{orderStatics?.totalCount} টি</b>
									</p>
									<p>
										গ্রহনকৃত অর্ডার :<b>{orderStatics?.deliveredOrder} টি</b>{' '}
									</p>
									<p>
										বাতিলকৃত অর্ডার : <b>{orderStatics?.canceledOrder} টি</b>
									</p>
									<p>
										গ্রহন করা হয়নি এমন অর্ডার :{' '}
										<b>{orderStatics?.notReceived} টি</b>
									</p>
								</div>
							) : (
								<div>
									<p>
										Total Order : <b>{orderStatics?.totalCount}</b>
									</p>
									<p>
										Received Order :<b>{orderStatics?.deliveredOrder} </b>{' '}
									</p>
									<p>
										Canceled Order : <b>{orderStatics?.canceledOrder} </b>
									</p>
									<p>
										Not Received : <b>{orderStatics?.notReceived} </b>
									</p>
								</div>
							)}
						</Card>
						<p className={Styles.history_info}>
							{' '}
							{getLang === 'বাং'
								? ` গ্রহনকৃত খাবারের বিস্তারিত ।`
								: 'Your consumed meal details'}
						</p>
						<div>
							<Table
								style={{ textAlign: 'center' }}
								columns={isMobile ? mobileColumns : columns}
								dataSource={
									Array.isArray(data?.data?.orderHistory)
										? data.data?.orderHistory
										: []
								}
								pagination={config}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default History;
