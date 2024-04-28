'use client';
import History from '@/components/Dashboard/History/History';
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import Styles from './page.module.css';

const page = () => {
	return (
		<DashboardLayout>
			<div className={Styles.container}>
				<History />
			</div>
		</DashboardLayout>
	);
};

export default page;
