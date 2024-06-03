import History from '@/components/Dashboard/History/History';
import React from 'react';
import Styles from './page.module.css';

const page = () => {
	return (
		<div className={Styles.container}>
			<History />
		</div>
	);
};

export default page;
