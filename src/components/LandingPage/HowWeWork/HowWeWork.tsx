import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Styles from './style.module.css';
import Image from 'next/image';
import system_img from '@/assets/how_we_work.png';
import { Steps } from 'antd';
import { costing } from '@/utils/cost';

const HowWeWork = () => {
	return (
		<div className={Styles.container}>
			<h1 className={Styles.header}>How We Work</h1>
			<h2 style={{ textAlign: 'center' }}>
				We always give most priority to our client satisfaction and work
				accordingly.
			</h2>
			<div className={Styles.delivery_terms_container}>
				<div className={Styles.img_container}>
					<Image src={system_img} alt="delivery_img" layout="responsive" />
				</div>
				<div className={Styles.condition_container}>
					<div className={Styles.condition_title}>
						Our working process{' '}
						<ArrowRightOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>
					</div>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We finalize your confirmed order at 7:00 AM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We start preparation for cooking at 8:00 AM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We finish cooking at 11:00 AM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We prepare your order at 11:30 AM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We start delivery process at 11:40 AM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						Your Order will deliver between 11.50 AM to 12:59 PM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We start picking boxes at 4:00 PM
					</p>
					<p>
						<CheckCircleOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>{' '}
						We start cleaning boxes at 6:00 PM
					</p>
					<p style={{ fontWeight: 'bold' }}>
						N.B : The time we mention is approximate. It is not fixed
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowWeWork;
