'use client';
import Image from 'next/image';
import Styles from './Profile.module.css';
import profile_img from '@/assets/profile.png';
import { Avatar, Col, Input, Modal, Row, Tooltip, message } from 'antd';
import { useGetInfoQuery } from '@/redux/api/userApi';
import Statics from '../Statics/Statics';
import { info } from 'console';
import Loader from '@/components/Loader/Loader';
import Order from '../Order/Order';
import TeamInfo from '../TeamInfo/TeamInfo';
import { InfoCircleOutlined, SettingFilled } from '@ant-design/icons';
import { useChangePasswordMutation } from '@/redux/api/authApi';
import { getFromLocalStorage } from '@/utils/local-storage';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { costing } from '@/utils/cost';
import { Span } from 'next/dist/trace';

const Profile = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { data, isLoading } = useGetInfoQuery(undefined);
	const teamInfo = data?.teamInfo;
	const showTeamDiv = teamInfo?.id ? {} : { display: 'none' };
	const divWidth = teamInfo?.id ? 12 : 24;
	const [changePassword] = useChangePasswordMutation();
	const successMessage =
		getLang === 'বাং'
			? 'পাসওয়ার্ড পরিবর্তন সফল হয়েছে'
			: 'Password changed successfully';
	const errorMessage =
		getLang === 'বাং'
			? 'পাসওয়ার্ড পরিবর্তন সফল হয়নি'
			: 'Failed to change password';
	const passwordLengthError =
		getLang === 'বাং'
			? 'পাসওয়ার্ড ৫ অক্ষরের বেশি অথবা ১৬ অক্ষরের কম হতে হবে'
			: 'Password must be getter than 5 digit or less than 16 digit';
	const [open, setOpen] = useState(false);
	const [payload, setPayload] = useState({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleChangePassword = async () => {
		setConfirmLoading(true);
		const result: any = await changePassword(payload);
		setPayload({
			...payload,
			confirmPassword: '',
			newPassword: '',
			oldPassword: '',
		});
		if (result.data.success) {
			message.success(successMessage);
		} else {
			message.error(
				`${result.data.statusCode === 502 ? passwordLengthError : errorMessage}`
			);
		}
		setPayload({ confirmPassword: '', newPassword: '', oldPassword: '' });
		setConfirmLoading(false);
		setOpen(false);
	};
	const handleCancel = () => {
		setPayload({ confirmPassword: '', newPassword: '', oldPassword: '' });
		setOpen(false);
	};

	return (
		<Row gutter={[20, 20]}>
			<Modal
				title={
					<div style={{ textAlign: 'center' }}>
						{getLang === 'বাং' ? 'পাসওয়ার্ড পরিবর্তন করুন' : 'Change password'}
					</div>
				}
				open={open}
				onOk={handleChangePassword}
				okText={'Confirm'}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okButtonProps={{
					disabled:
						payload.oldPassword && payload.newPassword.length
							? payload.newPassword === payload.confirmPassword
								? false
								: true
							: true,
				}}
			>
				<div className={Styles.change_password_container}>
					<div>
						<p style={{ margin: '10px 0' }}>
							{getLang === 'বাং' ? 'পুরাতন পাসওয়ার্ড ' : 'Old password'}
						</p>
						<Input.Password
							value={payload.oldPassword}
							placeholder="*******"
							onChange={(e) =>
								setPayload({
									...payload,
									oldPassword: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<p style={{ margin: '10px 0' }}>
							{getLang === 'বাং' ? 'নতুন পাসওয়ার্ড ' : 'New password'}
						</p>
						<Input.Password
							value={payload.newPassword}
							placeholder="*******"
							onChange={(e) =>
								setPayload({
									...payload,
									newPassword: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<p style={{ margin: '10px 0' }}>
							{getLang === 'বাং'
								? 'পাসওয়ার্ড কনফার্ম করুন'
								: 'Confirm password'}
						</p>
						<Input.Password
							value={payload.confirmPassword}
							placeholder="*******"
							onChange={(e) =>
								setPayload({
									...payload,
									confirmPassword: e.target.value,
								})
							}
						/>
					</div>
				</div>
			</Modal>
			<Col md={12} xs={24}>
				<div className={Styles.container}>
					{isLoading ? (
						<div className={Styles.loader_container}>
							<Loader />
						</div>
					) : (
						<div>
							<div className={Styles.profile_container}>
								<div className={Styles.avatar_container_desktop}>
									<Avatar
										shape="square"
										gap={5}
										size={110}
										icon={
											<Image
												src={profile_img}
												alt="profile_img"
												width={100}
												layout="responsive"
											/>
										}
									/>
								</div>
								<div className={Styles.avatar_container_mobile}>
									<Avatar
										style={{ display: 'block', margin: '5px auto' }}
										shape="circle"
										gap={5}
										size={110}
										icon={
											<Image
												src={profile_img}
												alt="profile_img"
												width={100}
												layout="responsive"
											/>
										}
									/>
								</div>
								<div className={Styles.profile_info_container}>
									<p className={Styles.user_name}>
										{getLang === 'বাং' ? 'নাম' : 'Name'} : {data.name}
									</p>
									<h4>
										{getLang === 'বাং' ? 'ব্যালেন্স' : 'Balance'} : ৳{' '}
										{data?.balance}
									</h4>
									<div
										style={{
											width: '100%',
											display: 'flex',
											gap: '25px',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<h4 style={{ margin: '5px 0' }}>
											{getLang === 'বাং' ? 'আজকের অর্ডার' : `Today's Order`} :{' '}
											{data?.order[0] ? (
												data?.order[0]?.status == 'received' ? (
													<span style={{ color: 'gray' }}>
														{getLang === 'বাং'
															? 'অর্ডার গ্রহন করেছেন'
															: 'Order received'}
													</span>
												) : data?.order[0]?.status == 'canceled' ? (
													<span style={{ color: 'red' }}>
														{getLang === 'বাং'
															? 'অর্ডার বাতিল করেছেন'
															: 'Order Canceled'}
													</span>
												) : (
													<span style={{ color: 'green' }}>
														{getLang === 'বাং'
															? 'আপনার অর্ডার রয়েছে'
															: 'Order Pending'}
													</span>
												)
											) : (
												<span style={{ color: 'red' }}>
													{getLang === 'বাং' ? 'আপনার অর্ডার নেই' : 'No Order'}
												</span>
											)}
										</h4>
										<div>
											<Tooltip
												placement="bottomRight"
												title={
													<div className={Styles.expenses_info}>
														<h3>
															{getLang === 'বাং'
																? 'যাবতীয় খরচ'
																: 'Expenses Details'}{' '}
														</h3>
														<div className={Styles.expenses}>
															<p>
																{getLang === 'বাং'
																	? `খাবার বিল : ৳ ${costing.mealCost}`
																	: `Meal cost : ৳ ${costing.mealCost}`}{' '}
															</p>
															<p>
																{getLang === 'বাং'
																	? 'ডেলিভারি ফি'
																	: 'Delivery Fee'}{' '}
																: ৳ {costing.deliveryFee}
															</p>
															<p>
																{getLang === 'বাং'
																	? 'প্ল্যাটফর্ম ফি'
																	: 'Platform fee'}{' '}
																: ৳ {costing.platformFee}
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
										</div>
									</div>
									<p>
										{getLang === 'বাং' ? 'ফোন নাম্বার' : 'Phone'} : {data.phone}
									</p>
									<p>
										{getLang === 'বাং' ? 'ঠিকানা' : 'Address'} : {data.address}
									</p>
								</div>
								<SettingFilled
									className={Styles.setting}
									onClick={() => {
										setOpen(true);
									}}
								/>
							</div>
						</div>
					)}
				</div>
			</Col>
			<Col md={12} xs={24}>
				<div className={Styles.container}>
					{isLoading ? (
						<div className={Styles.loader_container}>
							<Loader />
						</div>
					) : (
						<Statics info={data} />
					)}
				</div>
			</Col>
			<Col md={12} xs={24} style={showTeamDiv}>
				<div className={Styles.container}>
					{teamInfo?.id ? <TeamInfo teamInfo={teamInfo} /> : <></>}
				</div>
			</Col>
			<Col md={divWidth} xs={24}>
				<Order />
			</Col>
		</Row>
	);
};

export default Profile;
