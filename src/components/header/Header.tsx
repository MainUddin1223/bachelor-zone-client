'use client';
import Styles from './Header.module.css';
import { Switch, Flex, ConfigProvider, Button, message } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';

const Header = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const dispatch = useAppDispatch();
	const userInfo = getAuthInfo();
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

	return (
		<div className={Styles.container}>
			<div className={Styles.header_container}>
				<Flex justify="space-between" align="center">
					<div>
						<h1 className={Styles.text_logo} onClick={() => router.push('/')}>
							Bachelor Zone
						</h1>
					</div>
					{
						<div className={Styles.login_container}>
							<ConfigProvider
								theme={{
									components: {
										Switch: {
											colorTextQuaternary: '#1677ff',
										},
									},
								}}
							>
								<Switch
									checkedChildren="বাং"
									unCheckedChildren="ENG"
									value={basicData.lang == 'eng' ? false : true}
									onChange={(value) => handleChangeLanguage(value)}
								/>
							</ConfigProvider>
							{userInfo ? (
								<p onClick={handleLogout} className={Styles.login_button}>
									Logout
								</p>
							) : (
								<>
									{showLoginBtn && (
										<Button
											onClick={() => router.push('/login')}
											className={Styles.login_button}
										>
											Login
										</Button>
										// <Link href={'/login'} className={Styles.login_button}>
										// 	Login
										// </Link>
									)}
								</>
							)}
						</div>
					}
				</Flex>
			</div>
		</div>
	);
};

export default Header;
