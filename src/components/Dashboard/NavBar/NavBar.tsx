'use client';

import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';

const NavBar = () => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div>
			<Link href={'/dashboard'}>
				{getLang === 'বাং' ? 'ড্যাশবোর্ড' : 'Dashboard'}
			</Link>
			<Link href={'/dashboard/orders'}>
				{getLang === 'বাং' ? 'অর্ডার' : 'Orders'}
			</Link>
			<Link href={'/dashboard/history'}>
				{getLang === 'বাং' ? 'হিস্টোরি' : 'History'}
			</Link>
			<Link href={'/dashboard/transaction'}>
				{getLang === 'বাং' ? 'লেনদেন' : 'Transaction'}
			</Link>
		</div>
	);
};

export default NavBar;
