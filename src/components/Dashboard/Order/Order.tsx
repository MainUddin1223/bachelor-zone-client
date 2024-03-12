'use client';
import {
	Button,
	Col,
	DatePicker,
	DatePickerProps,
	InputNumber,
	Modal,
	Row,
} from 'antd';
import Styles from './Order.module.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useAppSelector } from '@/redux/hooks';

const Order = () => {
	const [open, setOpen] = useState(false);
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const [selectedDate, setSelectedDate] = useState(
		dayjs(Date.now()).format('YYYY-MM-DD')
	);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(dateString);
	};

	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		setTimeout(() => {
			setOpen(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
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
				</div>
				<div className={Styles.lunch_container}>
					<Row gutter={[15, 15]} justify={'space-between'}>
						<Col xs={12} md={6}>
							<div className={Styles.lunch}>
								<p>{getLang === 'বাং' ? 'দুপুরের খাবার' : 'Lunch'}</p>
								<InputNumber
									min={0}
									max={5}
									defaultValue={0}
									onChange={(value: any) => console.log(value)}
								/>
							</div>
						</Col>
						<Col xs={12} md={6}>
							<div className={Styles.lunch}>
								<p>{getLang === 'বাং' ? 'রাতের খাবার' : 'Dinner'}</p>
								<InputNumber
									min={0}
									max={5}
									defaultValue={0}
									onChange={(value: any) => console.log(value)}
								/>
							</div>
						</Col>
						<Col xs={12} md={6}>
							<div className={Styles.lunch}>
								<p>
									{getLang === 'বাং' ? 'দুপুরের টিফিন' : 'Tiffin for Lunch'}{' '}
								</p>
								<InputNumber
									min={0}
									max={2}
									defaultValue={0}
									onChange={(value: any) => console.log(value)}
								/>
							</div>
						</Col>
						<Col xs={12} md={6}>
							<div className={Styles.lunch}>
								<p>{getLang === 'বাং' ? 'রাতের টিফিন' : 'Tiffin for Dinner'}</p>
								<InputNumber
									min={0}
									max={2}
									defaultValue={0}
									onChange={(value: any) => console.log(value)}
								/>
							</div>
						</Col>
					</Row>
				</div>
				<div className={Styles.order_btn}>
					<Button type="primary" onClick={() => setOpen(true)}>
						{getLang === 'বাং' ? 'অর্ডার করুন' : 'Order Meal'}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Order;
