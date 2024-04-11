'use client';
import { useGetTransactionHistoryQuery } from '@/redux/api/userApi';
import Styles from './Transaction.module.css';
import { useAppSelector } from '@/redux/hooks';
import { Table, TableColumnsType } from 'antd';
import { DataType, TransactionDataType } from '@/type';

const Transaction = () => {
	const screenSize = typeof window !== 'undefined' ? window.innerWidth : 1000;
	const isMobile = screenSize < 768;
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { data, isLoading } = useGetTransactionHistoryQuery(undefined);
	if (isLoading) return <></>;
	const config = {
		current: data?.meta?.currentPage,
		pageSize: data?.meta.size,
		total: data?.meta.totalPage,
	};
	const columns: TableColumnsType<TransactionDataType> = [
		{
			title: (
				<span>{getLang === 'বাং' ? 'লেনদেনের তারিখ' : 'Transaction Date'}</span>
			),
			dataIndex: 'date',
			render: (data) => {
				const date = data.split('T')[0];
				return <h4>{date}</h4>;
			},
		},
		{
			title: <span>{getLang === 'বাং' ? 'পরিমান' : 'Amount'}</span>,
			dataIndex: 'amount',
			render: (data) => <h4>{data}</h4>,
		},
		{
			title: (
				<span>{getLang === 'বাং' ? 'লেনদেনের ধরন' : 'Transaction Type'}</span>
			),
			dataIndex: 'transaction_type',
			render: (data) => <p>{data}</p>,
		},
		{
			title: <span>{getLang === 'বাং' ? 'বিস্তারিত' : 'Description'}</span>,
			dataIndex: 'description',
			render: (data) => <p>{data}</p>,
		},
	];

	const mobileColumns: TableColumnsType<TransactionDataType> = [
		{
			title: '',
			dataIndex: '',
			render: (_: any, details: TransactionDataType) => {
				const date = details.date.split('T')[0];
				return (
					<div>
						<h4>
							{getLang === 'বাং' ? 'লেনদেনের তারিখ' : 'Transaction Date'} :{' '}
							{date}
						</h4>
						<h4>
							{getLang === 'বাং' ? 'পরিমান' : 'Amount'} :{' '}
							<span style={{ color: 'var(--primary-color)' }}>
								{details.amount}
							</span>
						</h4>
						<h4>
							{getLang === 'বাং' ? 'লেনদেনের ধরন' : 'Transaction Type'} :{' '}
							<span style={{ textTransform: 'capitalize' }}>
								{details.transaction_type}
							</span>
						</h4>
						<h4>
							{getLang === 'বাং' ? 'বিস্তারিত' : 'Description'} :{' '}
							<span style={{ textTransform: 'capitalize' }}>
								{details.description}
							</span>
						</h4>
					</div>
				);
			},
		},
	];
	return (
		<div className={Styles.container}>
			<h3 className={Styles.history_header}>
				{getLang === 'বাং' ? 'লেনদেনের তালিকা' : 'Transaction History'}
			</h3>
			<p className={Styles.history_info}>
				{' '}
				{getLang === 'বাং'
					? `আপনার শেষ ১0 টি লেনদেনের বর্ণনা`
					: 'Your last 10 transactions'}
			</p>
			<div>
				<Table
					style={{ textAlign: 'center' }}
					columns={isMobile ? mobileColumns : columns}
					dataSource={Array.isArray(data.data) ? data.data : []}
					pagination={config}
				/>
			</div>
		</div>
	);
};

export default Transaction;
