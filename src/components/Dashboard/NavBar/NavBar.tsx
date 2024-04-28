'use client';
import Styles from './NavBar.module.css';
import { Button, ConfigProvider, Drawer, Switch, message } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';
import { CloseCircleOutlined, MenuOutlined } from '@ant-design/icons';
import type { DrawerProps, RadioChangeEvent } from 'antd';

const NavBar = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const dispatch = useAppDispatch();
	const getLang = basicData.lang;
	const userInfo = getAuthInfo();
	const getSetLanguage = getFromLocalStorage('lang');
	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const pathArr = pathname.split('/');
	const currentPage = pathArr[pathArr.length - 1];
	const showLoginBtn =
		pathname == '/login' || pathname == '/register' ? false : true;

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
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
		localStorage.clear();
		message.success('Logout successful');
	};
	return (
		<div className={Styles.container}>
			{userInfo ? (
				<>
					<div className={Styles.nav_container}>
						<Link
							href={'/dashboard'}
							className={`${Styles.nav_item} ${currentPage === 'dashboard' && Styles.selected_item}`}
						>
							{getLang === 'বাং' ? 'ড্যাশবোর্ড' : 'Dashboard'}
						</Link>
						<Link
							href={'/dashboard/orders'}
							className={`${Styles.nav_item} ${currentPage === 'orders' && Styles.selected_item}`}
						>
							{getLang === 'বাং' ? 'অর্ডার' : 'Orders'}
						</Link>
						<Link
							href={'/dashboard/history'}
							className={`${Styles.nav_item} ${currentPage === 'history' && Styles.selected_item}`}
						>
							{getLang === 'বাং' ? 'হিস্টোরি' : 'History'}
						</Link>
						<Link
							href={'/dashboard/transaction'}
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
							<p
								onClick={handleLogout}
								className={Styles.nav_item}
								style={{ cursor: 'pointer' }}
							>
								{getLang === 'বাং' ? 'লগআউট' : 'Logout'}
							</p>
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
								<div className={Styles.drawer_nav_content}>
									<Link
										href={'/dashboard'}
										className={`${Styles.nav_item} ${currentPage === 'dashboard' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'ড্যাশবোর্ড' : 'Dashboard'}
									</Link>
									<Link
										href={'/dashboard/orders'}
										className={`${Styles.nav_item} ${currentPage === 'orders' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'অর্ডার' : 'Orders'}
									</Link>
									<Link
										href={'/dashboard/history'}
										className={`${Styles.nav_item} ${currentPage === 'history' && Styles.selected_item}`}
									>
										{getLang === 'বাং' ? 'হিস্টোরি' : 'History'}
									</Link>
									<Link
										href={'/dashboard/transaction'}
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
							</Drawer>
						</ConfigProvider>
					</div>
				</>
			) : (
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
							unCheckedChildren={<div style={{ fontWeight: 'bold' }}>ENG</div>}
							value={basicData.lang == 'eng' ? false : true}
							onChange={(value) => handleChangeLanguage(value)}
						/>
					</ConfigProvider>
					{showLoginBtn ? (
						<Link
							href={'/login'}
							className={`${Styles.nav_item}`}
							style={{ cursor: 'pointer' }}
						>
							{getLang === 'বাং' ? 'লগইন' : 'Login'}
						</Link>
					) : (
						<></>
					)}
				</div>
			)}
		</div>
	);
};

export default NavBar;
