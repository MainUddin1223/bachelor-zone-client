'use client';
import { Button } from 'antd';
import Styles from './TeamInfo.module.css';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
const TeamInfo = ({ teamInfo }: { teamInfo: any }) => {
	const router = useRouter();
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { name, member, due_boxes, order, orderStatus } = teamInfo;
	return (
		<div className={Styles.container}>
			<h3 className={Styles.info}>
				{' '}
				{getLang === 'বাং' ? 'টিম' : 'Team'} : {name}
			</h3>
			<h4 className={Styles.info}>
				{getLang === 'বাং' ? 'মোট সদস্য' : 'Total Member'} : {member}
			</h4>
			<h4 className={Styles.info}>
				{getLang === 'বাং' ? 'আজকের অর্ডার' : `Today's Order`} : {order}
			</h4>
			<h4 className={Styles.info}>
				{getLang === 'বাং' ? (
					<span>
						অর্ডারের অবস্থান :{' '}
						{orderStatus == 'pending' ? (
							<span style={{ color: 'green' }}>অর্ডার রয়েছে</span>
						) : (
							<span style={{ color: 'gray' }}>অর্ডার গ্রহন করেছেন</span>
						)}
						`
					</span>
				) : (
					`Order Status : ${orderStatus == 'pending' ? 'Pending' : 'Delivered'}`
				)}
			</h4>
			<h4 className={Styles.info}>
				{getLang === 'বাং' ? 'বাকী টিফিন' : 'Due Boxes'} : {due_boxes}
			</h4>
			<Button
				style={{ marginTop: '5px' }}
				onClick={() => router.push('/user/team')}
			>
				{getLang === 'বাং' ? 'বিস্তারিত জানুন' : 'Team details'}
			</Button>
		</div>
	);
};

export default TeamInfo;
