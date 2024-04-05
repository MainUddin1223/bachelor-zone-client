'use client';

import { Spin } from 'antd';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles.container}>
			<Spin size="large" />
		</div>
	);
};

export default Loader;
