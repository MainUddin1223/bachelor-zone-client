'use client';
import {
	Button,
	Col,
	DatePicker,
	DatePickerProps,
	InputNumber,
	Modal,
	Row,
	message,
} from 'antd';
import Styles from './Order.module.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useAppSelector } from '@/redux/hooks';
import { useOrderMealMutation } from '@/redux/api/userApi';

const Order = () => {
	const [open, setOpen] = useState(false);
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const [orderMeal] = useOrderMealMutation();
	const [selectedDate, setSelectedDate] = useState(
		dayjs(Date.now()).format('YYYY-MM-DD')
	);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const [orderDate, setOrderDate] = useState<any>(selectedDate);

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		setOrderDate(dateString);
	};

	const handleOk = async () => {
		setConfirmLoading(true);
		const date = `${orderDate}T00:00:00.000Z`;
		const result = await orderMeal({ date }).unwrap();
		setOpen(false);
		setConfirmLoading(false);
		if (result.success) {
			message.success('Order placed successfully');
		} else {
			message.error(result.errorMessages);
		}
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<div className={Styles.container}>
			<h3 className={Styles.order_header}>
				{getLang === 'বাং' ? 'খাবার অর্ডার করুন' : 'Order your meals'}
			</h3>
			<hr style={{ margin: '10px 0' }} />
			<Modal
				title="Order your Meals"
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			></Modal>
			<div>
				<div className={Styles.date_container}>
					<p>{getLang === 'বাং' ? 'তারিখ সিলেক্ট করুন' : 'Select a date'}</p>
					<DatePicker
						inputReadOnly
						onChange={onChange}
						defaultValue={dayjs(selectedDate)}
					/>
					<Button type="primary" onClick={() => setOpen(true)}>
						{getLang === 'বাং' ? 'অর্ডার করুন' : 'Order Meal'}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Order;
