'use client';

import { getAuthInfo } from '@/utils/jwt';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../Dashboard/NavBar/NavBar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default DashboardLayout;
