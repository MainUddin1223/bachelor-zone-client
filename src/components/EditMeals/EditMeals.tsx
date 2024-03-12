'use client';

import Styles from './EditMeals.module.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
	Button,
	Col,
	DatePicker,
	Flex,
	InputNumber,
	Modal,
	Row,
} from 'antd';

const EditMeals = ({
	details,
	isMobile,
	getLang,
}: {
	details: any;
	isMobile: boolean;
	getLang: any;
}) => {
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const [updatedData, setUpdatedData] = useState({
		...details,
	});

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setOpen(false);
			setConfirmLoading(false);
			console.log(updatedData);
			setUpdatedData(details);
		}, 2000);
	};

	const handleCancel = (details: any) => {
		setUpdatedData(details);
		setOpen(false);
	};

	return (
		<div>
			<Flex gap={10}>
				<Button onClick={() => setOpen(true)}>
					{getLang === 'বাং' ? 'আর্ডার পরিবর্তন করুন' : 'Edit Meals'}
				</Button>
				<Button danger>
					{getLang === 'বাং' ? 'বাতিল করুন' : 'Cancel Meals'}
				</Button>
			</Flex>
			<Modal
				title={
					<h2>
						{' '}
						{getLang === 'বাং' ? 'আর্ডার পরিবর্তন করুন' : 'Edit your Meals'}
					</h2>
				}
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={() => handleCancel(details)}
			>
				<div>
					<div className={Styles.date_container}>
						<p>{getLang === 'বাং' ? 'তারিখ সিলেক্ট করুন' : 'Select a date'}</p>
						<DatePicker
							onChange={(value: any) =>
								setUpdatedData({
									...updatedData,
									date: dayjs(value).format('YYYY-MM-DD'),
								})
							}
							defaultValue={dayjs(updatedData.date)}
							allowClear={false}
							inputReadOnly
							value={dayjs(updatedData.date)}
							disabledDate={(current) => {
								return (
									dayjs().add(-1, 'days') >= current ||
									dayjs().add(1, 'month') <= current
								);
							}}
						/>
					</div>
					<div className={Styles.lunch_container}>
						<Row gutter={[15, 15]}>
							<Col xs={12} md={6}>
								<div className={Styles.lunch}>
									<p>{getLang === 'বাং' ? 'দুপুরের খাবার' : 'Lunch'}</p>
									<InputNumber
										min={0}
										max={5}
										defaultValue={updatedData.lunch}
										onChange={(value: any) =>
											setUpdatedData({ ...updatedData, lunch: value })
										}
										value={updatedData.lunch}
									/>
								</div>
							</Col>
							<Col xs={12} md={6}>
								<div className={Styles.lunch}>
									<p>{getLang === 'বাং' ? 'রাতের খাবার' : 'Dinner'}</p>
									<InputNumber
										min={0}
										max={5}
										defaultValue={updatedData.dinner}
										onChange={(value: any) =>
											setUpdatedData({ ...updatedData, dinner: value })
										}
										value={updatedData.dinner}
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
									<p>
										{getLang === 'বাং' ? 'রাতের টিফিন' : 'Tiffin for Dinner'}
									</p>
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
				</div>
			</Modal>
		</div>
	);
};

export default EditMeals;
