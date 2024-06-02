'use client';

import { getAuthInfo } from '@/utils/jwt';
import { redirect, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		const userInfo: any = getAuthInfo();
		setTimeout(() => {
			if (!userInfo) {
				redirect('/login');
			}
			if (!userInfo.is_claimed) {
				redirect('/claim');
			}
		}, 100);
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default DashboardLayout;
