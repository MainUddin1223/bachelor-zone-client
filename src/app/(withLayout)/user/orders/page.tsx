'use client';

import UpcomingMeals from '@/components/Dashboard/Meals/Meals';
import Order from '@/components/Dashboard/Order/Order';
import Styles from './order.module.css';

const page = () => {
	return (
		<div className={Styles.container}>
			<Order />
			<div className={Styles.meals}>
				<UpcomingMeals />
			</div>
		</div>
	);
};

export default page;
