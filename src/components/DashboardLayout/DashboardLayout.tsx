'use client';

import { getAuthInfo } from '@/utils/jwt';
import { redirect, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../Dashboard/NavBar/NavBar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	// const [isLoading, setIsLoading] = useState(true);
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 100);
	// }, []);
	const userInfo: any = getAuthInfo();
	if (!userInfo) {
		redirect('/login');
	}
	if (!userInfo.is_claimed) {
		redirect('/claim');
	}
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default DashboardLayout;
