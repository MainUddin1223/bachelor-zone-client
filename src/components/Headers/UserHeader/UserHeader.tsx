'use client';
import Styles from './UserHeader.module.css';
import { Switch, Flex, ConfigProvider, Button, message } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';
import UserNavBar from '@/components/NavBars/UserNavBar/UserNavBar';

const UserHeader = () => {
	const router = useRouter();

	return (
		<div className={Styles.container}>
			<div className={Styles.header_container}>
				<Flex justify="space-between" align="center">
					<div>
						<h1 className={Styles.text_logo} onClick={() => router.push('/')}>
							LUNCH TIME
						</h1>
					</div>
					<div>
						<UserNavBar />
					</div>
				</Flex>
			</div>
		</div>
	);
};

export default UserHeader;
