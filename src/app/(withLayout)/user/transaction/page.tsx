'use client';

import Transaction from '@/components/Dashboard/Transation/Transaction';
import Styles from './page.module.css';

const page = () => {
	return (
		<div className={Styles.container}>
			<Transaction />
		</div>
	);
};

export default page;
