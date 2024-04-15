'use client';

import UpcomingMeals from '@/components/Dashboard/Meals/Meals';
import Order from '@/components/Dashboard/Order/Order';
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';

const page = () => {
	return (
		<DashboardLayout>
			<Order />
			<UpcomingMeals />
		</DashboardLayout>
	);
};

export default page;
