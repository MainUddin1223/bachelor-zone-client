'use client';

import ClaimUser from '@/components/ClaimUser/ClaimUser';
import Footer from '@/components/Footer/Footer';
import PublicHeader from '@/components/Headers/PublicHeader/PublicHeader';

const page = () => {
	return (
		<>
			<PublicHeader />
			<ClaimUser />
			<Footer />
		</>
	);
};

export default page;
