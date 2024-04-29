'use client';
import { Col, Row } from 'antd';
import Styles from './Services.module.css';
import { useAppSelector } from '@/redux/hooks';
import approval_img from '@/assets/approval.png';
import Image from 'next/image';
const Services = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<h1 className={Styles.service_header}>
				{getLang === 'বাং' ? 'আমাদের সেবা' : 'Our Service'}
			</h1>
			<div>
				<Row gutter={[20, 20]} justify={'center'}>
					<Col xs={24} md={8} lg={8}>
						<div className={Styles.service_card}>
							<Image
								src={approval_img}
								alt="approval"
								className={Styles.approval_img}
							/>
							<p
								style={{
									fontSize: '21px',
									fontWeight: 'bold',
									margin: '10px 0',
								}}
							>
								{getLang === 'বাং'
									? 'দুপুরের খাবার ব্যাবস্থা'
									: 'Lunch Facility'}
							</p>
							<p>
								{getLang === 'বাং'
									? 'আমরা আপনার দুপুরের খাবার আপনার অফিসে পৌছে দেবো'
									: 'We will deliver your lunch to your office'}
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Services;
