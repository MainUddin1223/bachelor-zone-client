'use client';

import { InfoCircleOutlined } from '@ant-design/icons';
import Styles from './Statics.module.css';
import { Tooltip } from 'antd';
import { useAppSelector } from '@/redux/hooks';
import { costing } from '@/utils/cost';

const Statics = ({ info }: { info: any }) => {
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<div className={Styles.info_container}>
				<h4>
					{getLang === 'বাং' ? 'ব্যলেন্স' : 'Balance'}: ৳ {info?.balance}
				</h4>
				<Tooltip
					placement="bottomRight"
					title={
						<div className={Styles.expenses_info}>
							<h3>{getLang === 'বাং' ? 'যাবতীয় খরচ' : 'Expenses Details'} </h3>
							<div className={Styles.expenses}>
								<p>
									{getLang === 'বাং'
										? `খানা বিল : ৳ ${costing.mealCost} / প্রতিবেলা`
										: `Meal cost : ৳ ${costing.mealCost} / Meal`}{' '}
								</p>
								<p>
									{getLang === 'বাং' ? 'ডেলিভারি ফি' : 'Delivery Fee'} : ৳{' '}
									{costing.deliveryFee}
								</p>
								<p>
									{getLang === 'বাং' ? 'প্ল্যাটফর্ম ফি' : 'Platform fee'} : ৳{' '}
									{costing.platformFee}
								</p>
							</div>
						</div>
					}
					trigger="click"
					defaultOpen={false}
				>
					<p className={Styles.info}>
						<span>{getLang === 'বাং' ? 'খরচ' : 'Cost'}</span>{' '}
						<span>
							<InfoCircleOutlined />
						</span>
					</p>
				</Tooltip>
			</div>
			<h4>
				{getLang === 'বাং' ? 'টিম' : 'Team Name'} : {info?.team}
			</h4>
			<h4>
				{getLang === 'বাং' ? 'টিম লিডার' : 'Team Leader'} :{info?.teamLeader}{' '}
			</h4>
			<h4>
				{getLang === 'বাং' ? 'লিডার ফোন' : 'Leader Phone'} : {info?.leaderPhone}{' '}
			</h4>
		</div>
	);
};

export default Statics;
