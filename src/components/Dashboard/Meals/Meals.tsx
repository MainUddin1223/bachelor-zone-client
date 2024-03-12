'use client';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

import Styles from './Meals.module.css';
import EditMeals from '@/components/EditMeals/EditMeals';
import { DataType, MobileDataType } from '@/type';
import { useAppSelector } from '@/redux/hooks';

const mobileData: MobileDataType[] = [
	{
		key: 1,
		details: {
			date: '2024-03-01',
			lunch: 1,
			dinner: 3,
			lunch_tiffin: 2,
			dinner_tiffin: 2,
			order_date: '2024-02-28',
		},
	},
	{
		key: 2,
		details: {
			date: '2024-03-01',
			lunch: 2,
			dinner: 1,
			lunch_tiffin: 2,
			dinner_tiffin: 2,
			order_date: '2024-02-28',
		},
	},
	{
		key: 3,
		details: {
			date: '2024-03-01',
			lunch: 1,
			dinner: 1,
			lunch_tiffin: 2,
			dinner_tiffin: 2,
			order_date: '2024-02-28',
		},
	},
	{
		key: 4,
		details: {
			date: '2024-03-01',
			lunch: 1,
			dinner: 1,
			lunch_tiffin: 2,
			dinner_tiffin: 2,
			order_date: '2024-02-28',
		},
	},
];

const data: DataType[] = [
	{
		key: 1,
		date: '2024-03-01',
		lunch: 1,
		dinner: 3,
		lunch_tiffin: 2,
		dinner_tiffin: 2,
		order_date: '2024-02-28',
	},
	{
		key: 2,
		date: '2024-03-01',
		lunch: 1,
		dinner: 1,
		lunch_tiffin: 2,
		dinner_tiffin: 2,
		order_date: '2024-02-28',
	},
	{
		key: 3,
		date: '2024-03-01',
		lunch: 1,
		dinner: 1,
		lunch_tiffin: 2,
		dinner_tiffin: 2,
		order_date: '2024-02-28',
	},
	{
		key: 4,
		date: '2024-03-01',
		lunch: 1,
		dinner: 1,
		lunch_tiffin: 2,
		dinner_tiffin: 2,
		order_date: '2024-02-28',
	},
];

const Meals = () => {
	const screenSize = typeof window !== 'undefined' ? window.innerWidth : 1000;
	const isMobile = screenSize < 768;
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;

	const columns: TableColumnsType<DataType> = [
		{
			title: <span>{getLang === 'বাং' ? 'তারিখ' : 'Date'}</span>,
			dataIndex: 'date',
		},
		{
			title: <span>{getLang === 'বাং' ? 'দুপুররে খাবার' : 'Lunch'}</span>,
			dataIndex: 'lunch',
		},
		{
			title: <span>{getLang === 'বাং' ? 'রাতের খাবার' : 'Dinner'}</span>,
			dataIndex: 'dinner',
		},
		{
			title: (
				<span>{getLang === 'বাং' ? 'দুপুরের টিফিন' : 'Lunch Tiffin'}</span>
			),
			dataIndex: 'lunch_tiffin',
		},
		{
			title: <span>{getLang === 'বাং' ? 'রাতের টিফিন' : 'Dinner Tiffin'}</span>,
			dataIndex: 'dinner_tiffin',
		},
		{
			title: '',
			dataIndex: 'action',
			render: (_: any, details: DataType) => {
				return (
					<div>
						<EditMeals details={details} isMobile={false} getLang={getLang} />
					</div>
				);
			},
		},
	];

	const mobileColumns: TableColumnsType<MobileDataType> = [
		{
			title: 'Details',
			dataIndex: 'details',
			render: (details) => (
				<div>
					<p>
						{getLang === 'বাং' ? 'তারিখ' : 'Date'}: {details?.date}
					</p>
					<p>
						{getLang === 'বাং' ? 'দুপুররে খাবার' : 'Lunch'}: {details?.dinner}
					</p>
					<p>
						{getLang === 'বাং' ? 'রাতের খাবার' : 'Dinner'}: {details?.lunch}
					</p>
					<p>
						{getLang === 'বাং' ? 'দুপুরের টিফিন' : 'Lunch Tiffin'}:{' '}
						{details?.lunch_tiffin}
					</p>
					<p>
						{getLang === 'বাং' ? 'রাতের টিফিন' : 'Dinner Tiffin'}:{' '}
						{details?.dinner_tiffin}
					</p>
					<div style={{ marginTop: '10px' }}>
						<EditMeals details={details} isMobile={true} getLang={getLang} />
					</div>
				</div>
			),
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
					{isMobile ? (
						<Table
							columns={mobileColumns}
							dataSource={mobileData}
							pagination={false}
						/>
					) : (
						<Table columns={columns} dataSource={data} pagination={false} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Meals;
