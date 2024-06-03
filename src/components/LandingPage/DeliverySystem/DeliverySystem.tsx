'use client';

import { useAppSelector } from '@/redux/hooks';
import delivery_img from '@/assets/delivery.png';
import Image from 'next/image';
import Styles from './DeliveryMethod.module.css';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';

const DeliverySystem = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<h1 className={Styles.header}>Delivery System</h1>
			<h2 style={{ textAlign: 'center' }}>
				We follow a different delivery system. Here is our delivery system
			</h2>
			<div className={Styles.delivery_terms_container}>
				<div className={Styles.condition_container}>
					<div className={Styles.condition_title}>
						Our delivery system follows{' '}
						<ArrowRightOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>
					</div>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We will deliver your order to the team leader
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						Team leader will receive the order
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						Team leader will distribute orders among the members
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						Team leader will return empty boxes to delivery men
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						Team leader will handle delivered orders
					</p>
				</div>
				<div className={Styles.img_container}>
					<Image src={delivery_img} alt="delivery_img" layout="responsive" />
				</div>
			</div>
		</div>
	);
};

export default DeliverySystem;
