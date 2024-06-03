'use client';
import Footer from '@/components/Footer/Footer';
import UserHeader from '@/components/Headers/UserHeader/UserHeader';
import { getAuthInfo } from '@/utils/jwt';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const userInfo: any = getAuthInfo();
	useEffect(() => {
		if (!userInfo) {
			redirect('/login');
		}
		if (userInfo?.is_claimed == false) {
			redirect('/claim');
		}
	}, [router]);
	return (
		<>
			<UserHeader />
			{children}
			<Footer />
		</>
	);
};

export default DashboardLayout;
