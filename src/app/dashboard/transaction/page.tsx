'use client';

import Transaction from '@/components/Dashboard/Transation/Transaction';
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import Styles from './page.module.css';

const page = () => {
	return (
		<DashboardLayout>
			<div className={Styles.container}>
				<Transaction />
			</div>
		</DashboardLayout>
	);
};

export default page;
