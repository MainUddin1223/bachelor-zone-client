'use client';
import Styles from './PublicNavBar.module.css';
import { ConfigProvider, Switch, message } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';

const PublicNavbar = () => {
	const { basicData } = useAppSelector((state: any) => state.basicSlice);
	const dispatch = useAppDispatch();
	const getLang = basicData.lang;
	const userInfo: any = getAuthInfo();
	const getSetLanguage = getFromLocalStorage('lang');
	const router = useRouter();
	const pathname = usePathname();

	const showLoginBtn =
		pathname == '/login' || pathname == '/register' ? false : true;
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

	const handleHomeBtn = () => {
		if (userInfo?.is_claimed) {
			router.push('/user');
		} else {
			router.push('/claim');
		}
	};

	return (
		<div className={Styles.container}>
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
				{showLoginBtn && !userInfo ? (
					<Link
						href={'/login'}
						className={`${Styles.nav_item}`}
						style={{ cursor: 'pointer' }}
					>
						{getLang === 'বাং' ? 'লগইন' : 'Login'}
					</Link>
				) : userInfo ? (
					<>
						<HomeOutlined
							onClick={handleHomeBtn}
							style={{ fontSize: '21px' }}
						/>
						<LogoutOutlined
							onClick={handleLogout}
							style={{ fontSize: '21px' }}
						/>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default PublicNavbar;
