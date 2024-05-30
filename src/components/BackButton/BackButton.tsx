'use client';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const BackButton = () => {
	const router = useRouter();
	return (
		<div onClick={() => router.back()}>
			<ArrowLeftOutlined
				style={{
					backgroundColor: 'var(--primary-color)',
					borderRadius: '50%',
					padding: '10px',
					margin: '10px 0',
					color: 'white',
					cursor: 'pointer',
				}}
			/>
		</div>
	);
};

export default BackButton;
