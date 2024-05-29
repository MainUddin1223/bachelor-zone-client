'use client';
import { Button } from 'antd';
import Styles from './TeamInfo.module.css';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
const TeamInfo = ({ teamInfo }: { teamInfo: any }) => {
	const router = useRouter();
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	const { name, member, due_boxes, order } = teamInfo;
	return (
		<div className={Styles.container}>
			<h2 className={Styles.info}>
				{' '}
				{getLang === 'বাং' ? 'টিম' : 'Team'} : {name}
			</h2>
			<h3 className={Styles.info}>
				{getLang === 'বাং' ? 'মোট সদস্য' : 'Total Member'} : {member}
			</h3>
			<h3 className={Styles.info}>
				{getLang === 'বাং' ? 'আজকের অর্ডার' : `Today's Order`} : {order}
			</h3>
			<h3 className={Styles.info}>
				{getLang === 'বাং' ? 'বাকী টিফিন' : 'Due Boxes'} : {due_boxes}
			</h3>
			<Button onClick={() => router.push('/dashboard/team')}>
				{getLang === 'বাং' ? 'বিস্তারিত জানুন' : 'Team details'}
			</Button>
		</div>
	);
};

export default TeamInfo;
