'use client';
import Styles from './PublicHeader.module.css';
import { Switch, Flex, ConfigProvider, Button, message } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthInfo } from '@/utils/jwt';
import UserNavBar from '@/components/NavBars/UserNavBar/UserNavBar';
import PublicNavbar from '@/components/NavBars/PublicNavBar/PublicNavBar';

const PublicHeader = () => {
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
						<PublicNavbar />
					</div>
				</Flex>
			</div>
		</div>
	);
};

export default PublicHeader;
