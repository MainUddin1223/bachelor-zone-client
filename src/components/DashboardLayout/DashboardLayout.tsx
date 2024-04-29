'use client';

import { getAuthInfo } from '@/utils/jwt';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../Dashboard/NavBar/NavBar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	const userInfo: any = getAuthInfo();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, []);
	if (isLoading) return <Loader />;
	if (!userInfo) {
		router.push('/login');
		return;
	}
	if (!userInfo.is_claimed) {
		router.push('/claim');
		return;
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
