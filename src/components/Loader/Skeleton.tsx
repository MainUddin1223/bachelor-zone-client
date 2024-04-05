'use client';
import { Skeleton } from 'antd';

const SkeletonLoader = () => {
	return (
		<div>
			<Skeleton.Input active={true} size={'small'} />
			<Skeleton.Input active={true} size={'small'} />
			<Skeleton.Button active={true} size={'small'} shape="square" />
		</div>
	);
};

export default SkeletonLoader;
