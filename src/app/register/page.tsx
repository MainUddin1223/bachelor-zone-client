import Footer from '@/components/Footer/Footer';
import PublicHeader from '@/components/Headers/PublicHeader/PublicHeader';
import Register from '@/components/Register/Register';
import React from 'react';

const page = () => {
	return (
		<>
			<PublicHeader />
			<Register />
			<Footer />
		</>
	);
};

export default page;
