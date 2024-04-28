'use client';

import UpcomingMeals from '@/components/Dashboard/Meals/Meals';
import Order from '@/components/Dashboard/Order/Order';
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import Styles from './order.module.css';

const page = () => {
	return (
		<DashboardLayout>
			<div className={Styles.container}>
				<Order />
				<UpcomingMeals />
			</div>
		</DashboardLayout>
	);
};

export default page;
