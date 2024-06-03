import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Styles from './style.module.css';
import Image from 'next/image';
import payment_img from '@/assets/payment.png';

const PaymentSystem = () => {
	return (
		<div className={Styles.container}>
			<h1 className={Styles.header}>How To Pay us</h1>
			<h2 style={{ textAlign: 'center' }}>We follow prepaid payment system</h2>
			<div className={Styles.delivery_terms_container}>
				<div className={Styles.img_container}>
					<Image src={payment_img} alt="delivery_img" layout="responsive" />
				</div>
				<div>
					<div className={Styles.condition_title}>
						There are multiple ways to make your payment{' '}
						<ArrowRightOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>
					</div>
					<div className={Styles.condition_container}>
						<p>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							Via Mobile Banking
						</p>
						<p>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							Direct to the admin
						</p>
						<p>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							Via supplier
						</p>
						<p>
							<CheckCircleOutlined
								style={{ fontSize: '17px', color: 'var(--primary-color)' }}
							/>{' '}
							Via bank transfer
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentSystem;
