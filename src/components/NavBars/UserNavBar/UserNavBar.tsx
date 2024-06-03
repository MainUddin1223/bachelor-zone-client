'use client';
import Styles from './UserNavBar.module.css';
import {
	Button,
	ConfigProvider,
	Drawer,
	Input,
	Modal,
	Switch,
	message,
} from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';
import {
	CloseCircleOutlined,
	LogoutOutlined,
	MenuOutlined,
	SettingFilled,
} from '@ant-design/icons';
import { useChangePasswordMutation } from '@/redux/api/authApi';

const UserNavBar = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const dispatch = useAppDispatch();
	const getLang = basicData.lang;
	const getSetLanguage = getFromLocalStorage('lang');
	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [changePassword] = useChangePasswordMutation();
	const [isSettingOpen, setIsSettingOpen] = useState(false);
	const pathArr = pathname.split('/');
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

	const currentPage = pathArr[pathArr.length - 1];

	const [payload, setPayload] = useState({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const onClose = () => {
		setOpen(false);
	};

	const [openPasswordModal, setOpenPasswordModal] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleChangePassword = async () => {
		setConfirmLoading(true);
		const result: any = await changePassword(payload);
		if (result.data.success) {
			message.success(successMessage);
		} else {
			message.error(
				`${result.data.statusCode === 502 ? passwordLengthError : errorMessage}`
			);
		}
		setPayload({ confirmPassword: '', newPassword: '', oldPassword: '' });
		setConfirmLoading(false);
		setOpenPasswordModal(false);
	};
	const handleCancel = () => {
		setPayload({ confirmPassword: '', newPassword: '', oldPassword: '' });
		setOpenPasswordModal(false);
	};

	useEffect(() => {
		if (!getSetLanguage) {
			setToLocalStorage('lang', 'বাং');
			dispatch(addBasicData({ lang: getSetLanguage }));
		} else {
			dispatch(addBasicData({ lang: getSetLanguage }));
		}
	}, [basicData.lang, getSetLanguage]);

	const handleChangeLanguage = (isChecked: boolean) => {
		if (isChecked) {
			setToLocalStorage('lang', 'বাং');
			dispatch(addBasicData({ lang: 'বাং' }));
		} else {
			setToLocalStorage('lang', 'eng');
			dispatch(addBasicData({ lang: 'eng' }));
		}
	};

	const handleLogout = () => {
		router.push('/');
		setOpen(false);
		message.success('Logout successful');
		localStorage.clear();
	};
	return (
		<div className={Styles.container}>
			<Modal
				title={
					<div style={{ textAlign: 'center' }}>
						{getLang === 'বাং' ? 'পাসওয়ার্ড পরিবর্তন করুন' : 'Change password'}
					</div>
				}
				open={openPasswordModal}
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
			<>
				<div className={Styles.nav_container}>
					<Link
						href={'/user'}
						className={`${Styles.nav_item} ${currentPage === 'user' && Styles.selected_item}`}
					>
						{getLang === 'বাং' ? 'ড্যাশবোর্ড' : 'Dashboard'}
					</Link>
					<Link
						href={'/user/orders'}
						className={`${Styles.nav_item} ${currentPage === 'orders' && Styles.selected_item}`}
					>
						{getLang === 'বাং' ? 'অর্ডার' : 'Orders'}
					</Link>
					<Link
						href={'/user/history'}
						className={`${Styles.nav_item} ${currentPage === 'history' && Styles.selected_item}`}
					>
						{getLang === 'বাং' ? 'হিস্টোরি' : 'History'}
					</Link>
					<Link
						href={'/user/transaction'}
						className={`${Styles.nav_item} ${currentPage === 'transaction' && Styles.selected_item}`}
					>
						{getLang === 'বাং' ? 'লেনদেন' : 'Transaction'}
					</Link>
					<div className={Styles.login_container}>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: '#387849',
									colorText: '#ffffff',
									colorTextQuaternary: '#b5ccbf',
								},
								components: {
									Switch: {},
								},
							}}
						>
							<Switch
								checkedChildren={
									<div style={{ color: 'white', fontWeight: 'bold' }}>বাং</div>
								}
								unCheckedChildren={
									<div style={{ fontWeight: 'bold' }}>ENG</div>
								}
								value={basicData.lang == 'eng' ? false : true}
								onChange={(value) => handleChangeLanguage(value)}
							/>
						</ConfigProvider>
						<LogoutOutlined
							style={{ fontSize: '21px' }}
							onClick={handleLogout}
						/>
					</div>
				</div>
				<div className={Styles.mobile_nav_container}>
					<MenuOutlined
						onClick={() => setOpen(true)}
						style={{ fontSize: '25px' }}
					/>
					<ConfigProvider
						theme={{
							token: {
								colorBgMask: '#b5ccbf3f',
							},
						}}
					>
						<Drawer
							style={{ backgroundColor: '#e7e3ce' }}
							title={
								<div style={{ marginLeft: '-15px' }}>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#387849',
												colorText: '#ffffff',
												colorTextQuaternary: '#b5ccbf',
											},
											components: {
												Switch: {},
											},
										}}
									>
										<Switch
											checkedChildren={
												<div style={{ color: 'white', fontWeight: 'bold' }}>
													বাং
												</div>
											}
											unCheckedChildren={
												<div style={{ fontWeight: 'bold' }}>ENG</div>
											}
											value={basicData.lang == 'eng' ? false : true}
											onChange={(value) => handleChangeLanguage(value)}
										/>
									</ConfigProvider>
								</div>
							}
							placement={'left'}
							width={250}
							closeIcon={
								<CloseCircleOutlined
									style={{
										position: 'absolute',
										right: '15px',
										top: '17px',
										fontSize: '25px',
									}}
								/>
							}
							onClose={onClose}
							open={open}
						>
							<div className={Styles.setting}>
								{isSettingOpen ? (
									<CloseCircleOutlined
										onClick={() => setIsSettingOpen(false)}
									/>
								) : (
									<SettingFilled onClick={() => setIsSettingOpen(true)} />
								)}
							</div>

							{isSettingOpen ? (
								<div className={Styles.drawer_nav_content}>
									<p
										onClick={() => {
											setOpenPasswordModal(true);
											setOpen(false);
										}}
										className={Styles.nav_item}
										style={{ cursor: 'pointer' }}
									>
										{getLang === 'বাং'
											? 'পাসওয়ার্ড পরিবর্তন করুন'
											: 'Change password'}
									</p>
								</div>
							) : (
								<div className={Styles.drawer_nav_content}>
									<Link
										onClick={() => setOpen(false)}
										href={'/user'}
										className={`${Styles.nav_item} ${currentPage === 'user' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'ড্যাশবোর্ড' : 'Dashboard'}
									</Link>
									<Link
										onClick={() => setOpen(false)}
										href={'/user/orders'}
										className={`${Styles.nav_item} ${currentPage === 'orders' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'অর্ডার' : 'Orders'}
									</Link>
									<Link
										onClick={() => setOpen(false)}
										href={'/user/history'}
										className={`${Styles.nav_item} ${currentPage === 'history' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'হিস্টোরি' : 'History'}
									</Link>
									<Link
										href={'/user/transaction'}
										onClick={() => setOpen(false)}
										className={`${Styles.nav_item} ${currentPage === 'transaction' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'লেনদেন' : 'Transaction'}
									</Link>
									<p
										onClick={handleLogout}
										className={Styles.nav_item}
										style={{ cursor: 'pointer' }}
									>
										{getLang === 'বাং' ? 'লগআউট' : 'Logout'}
									</p>
								</div>
							)}
						</Drawer>
					</ConfigProvider>
				</div>
			</>
		</div>
	);
};

export default UserNavBar;
