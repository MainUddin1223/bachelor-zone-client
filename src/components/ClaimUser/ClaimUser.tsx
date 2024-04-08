'use client';
import activate_img from '@/assets/activate.png';
import { useAppSelector } from '@/redux/hooks';
import { Card, Col, Flex, Row, Tooltip } from 'antd';
import Image from 'next/image';
import Styles from './ClaimUser.module.css';
import { useState } from 'react';
import { costing } from '@/utils/cost';
import {
	InfoCircleOutlined,
	PhoneOutlined,
	WhatsAppOutlined,
} from '@ant-design/icons';

const ClaimUser = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<Card className={Styles.card}>
				<Tooltip
					placement="bottomRight"
					title={
						<div className={Styles.expenses_info}>
							<h3>{getLang === 'বাং' ? 'যাবতীয় খরচ' : 'Expenses Details'} </h3>
							<div className={Styles.expenses}>
								<p>
									{getLang === 'বাং'
										? ` টিফিন বক্স ফি: ৳ ${costing.tiffinBoxFee}`
										: `Tiffin Box fee: ৳ ${costing.tiffinBoxFee}`}{' '}
								</p>
								<p>
									{getLang === 'বাং' ? 'সর্বনিম্ম রিচার্জ' : 'Minimum recharge'}{' '}
									: ৳ {costing.minimumRecharge}
								</p>
								<p>
									{getLang === 'বাং' ? 'রেজিষ্ট্রেশন ফি' : 'Registration fee'} :
									৳ {costing.registrationFee}
								</p>
							</div>
						</div>
					}
					trigger="click"
					defaultOpen={false}
				>
					<p className={Styles.info}>
						<span>{getLang === 'বাং' ? 'খরচ' : 'Cost'}</span>{' '}
						<span>
							<InfoCircleOutlined />
						</span>
					</p>
				</Tooltip>

				<Image
					src={activate_img}
					alt="activate image"
					width={100}
					className={Styles.image}
				/>
				<p className={Styles.claim_text}>
					{getLang === 'বাং'
						? 'আপনার একাউন্ট এখনো সচল হয়নি । অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন'
						: 'Your account is not active yet. Please contact us'}
				</p>
				<div className={Styles.contact_info}>
					<Row gutter={[15, 15]}>
						<Col xs={24} sm={12}>
							<Flex justify="center" gap={10}>
								<PhoneOutlined
									style={{ fontSize: '22px', color: 'var(--primary-color)' }}
								/>
								<p style={{ fontSize: '17px' }}>+8801852902208</p>
							</Flex>
						</Col>
						<Col xs={24} sm={12}>
							<Flex justify={'center'} gap={10}>
								<WhatsAppOutlined
									style={{ fontSize: '22px', color: 'green' }}
								/>
								<p style={{ fontSize: '17px' }}>+8801852902208</p>
							</Flex>
						</Col>
					</Row>
				</div>
			</Card>
		</div>
	);
};

export default ClaimUser;
