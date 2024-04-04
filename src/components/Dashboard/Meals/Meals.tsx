'use client';
import { Button, Modal, Table, message } from 'antd';
import type { TableColumnsType } from 'antd';

import Styles from './Meals.module.css';
import { DataType } from '@/type';
import { useAppSelector } from '@/redux/hooks';
import {
	useCancelOrderMutation,
	useConfirmOrderMutation,
	useGetUpcomingOrdersQuery,
} from '@/redux/api/userApi';
import dayjs from 'dayjs';
import { useState } from 'react';

const UpcomingMeals = () => {
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [orderDate, setOrderDate] = useState('');
	const [action, setAction] = useState('');
	const [orderId, setOrderId] = useState(0);
	const screenSize = typeof window !== 'undefined' ? window.innerWidth : 1000;
	const isMobile = screenSize < 768;
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const orderAgainBtn = getLang === 'বাং' ? 'আবার অর্ডার করুন' : 'Re-Order';
	const cancelOrderBtn = getLang === 'বাং' ? 'বাতিল করুন' : 'Cancel';
	const { data, isLoading } = useGetUpcomingOrdersQuery(undefined);
	const [confirmOrder] = useConfirmOrderMutation();
	const [cancelOrder] = useCancelOrderMutation();
	if (isLoading) return <h1>Loading</h1>;

	const handleOk = async () => {
		setConfirmLoading(true);
		const result: any =
			action === 'cancel'
				? await cancelOrder(orderId)
				: await confirmOrder(orderId);
		setConfirmLoading(false);
		setOpen(false);
		if (result.data.success) {
			message.success(result.data.message);
		} else {
			message.error(result.data.message);
		}
	};

	const handleCancel = () => {
		setOpen(false);
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
					{data == 'pending' ? (
						<p style={{ color: 'green' }}>{data}</p>
					) : (
						<p style={{ color: 'red' }}>{data}</p>
					)}
				</span>
			),
		},
		{
			title: '',
			dataIndex: '',
			render: (_: any, details: DataType) => {
				const date = details.delivery_date.split('T')[0];
				return (
					<>
						{details.status == 'canceled' ? (
							<Button
								onClick={() => {
									setOrderDate(date);
									setOpen(true);
									setAction('confirm');
									setOrderId(details.id);
								}}
							>
								{orderAgainBtn}
							</Button>
						) : (
							<Button
								danger
								onClick={() => {
									setOrderDate(date);
									setOpen(true);
									setAction('cancel');
									setOrderId(details.id);
								}}
							>
								{orderAgainBtn}
							</Button>
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
				const date = details.delivery_date.split('T')[0];
				return (
					<div>
						<h3>
							{getLang === 'বাং' ? 'তারিখ' : 'Date'} : {date}
						</h3>
						<h3 style={{ display: 'flex', gap: '5px' }}>
							{getLang === 'বাং' ? 'স্ট্যাটাস' : 'Status'} :{' '}
							<span style={{ textTransform: 'capitalize' }}>
								{details.status == 'pending' ? (
									<p style={{ color: 'green' }}>{details.status}</p>
								) : (
									<p style={{ color: 'red' }}>{details.status}</p>
								)}
							</span>
						</h3>

						<>
							{details.status == 'canceled' ? (
								<Button
									style={{ marginTop: '15px' }}
									onClick={() => {
										setOrderDate(date);
										setOpen(true);
										setAction('confirm');
										setOrderId(details.id);
									}}
								>
									{orderAgainBtn}
								</Button>
							) : (
								<Button
									style={{ marginTop: '15px' }}
									danger
									onClick={() => {
										setOrderDate(date);
										setOpen(true);
										setAction('cancel');
										setOrderId(details.id);
									}}
								>
									{cancelOrderBtn}
								</Button>
							)}
						</>
					</div>
				);
			},
		},
	];

	return (
		<div>
			<Modal
				title={
					action == 'cancel'
						? getLang === 'বাং'
							? `${orderDate} তারিখের অর্ডার বাতিল নিশ্চিত করুন`
							: `Confirm cancel order of ${orderDate}`
						: getLang === 'বাং'
							? `${orderDate} তারিখের অর্ডার পুনরায় নিশ্চিত করুন`
							: `Confirm order of ${orderDate} again`
				}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			></Modal>
			<div>
				<h3 className={Styles.meals_header}>
					{getLang === 'বাং' ? 'অর্ডরকৃত খাবার' : 'Upcoming Meals'}
				</h3>
				<p className={Styles.meals_info}>
					{getLang === 'বাং'
						? 'আপনার আজকের অর্ডরকৃত খাবার ভোর 6:30 টার আগে  খাবারের অর্ডার বাতিল বা পুনরায় অর্ডার করতে পারেন এবং বাকী অর্ডার যেকোন সময় বাতিল করতে পারবেন'
						: `You can reconfirm or cancel today's meal before 6:30 AM and you can update rest order anytime`}
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
