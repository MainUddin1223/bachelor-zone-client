'use client';

import { InfoCircleOutlined } from '@ant-design/icons';
import Styles from './Statics.module.css';
import { Tooltip } from 'antd';
import { useAppSelector } from '@/redux/hooks';
import { costing } from '@/utils/cost';

const Statics = ({ info }: { info: any }) => {
	console.log(info);
	const { basicData } = useAppSelector((state) => state.basicSlice);
	const getLang = basicData.lang;
	return (
		<div className={Styles.container}>
			<div className={Styles.info_container}>
				<h4>
					{getLang === 'বাং' ? 'টিম' : 'Team Name'} : {info?.team}
				</h4>
				<div>
					<Tooltip
						placement="bottomRight"
						title={
							<div className={Styles.expenses_info}>
								<h3>{getLang === 'বাং' ? 'সদস্যের ডাটা' : 'Member info'} </h3>
								<div className={Styles.expenses}>
									{info?.memberInfo.map((member: any, index: number) => (
										<div key={index} style={{ margin: '5px 0' }}>
											<h5>
												{getLang === 'বাং' ? 'নাম' : 'Name'} :{' '}
												{member?.user?.name}
											</h5>
											<h5>
												{getLang === 'বাং' ? 'ফোন নাম্বার' : 'Phone'} :{' '}
												{member?.user?.phone}
											</h5>
											<hr style={{ marginTop: '5px' }} />
										</div>
									))}
								</div>
							</div>
						}
						trigger="click"
						defaultOpen={false}
					>
						<p className={Styles.info}>
							<span>{getLang === 'বাং' ? 'টিমের সদস্য' : 'Team info'}</span>{' '}
							<span>
								<InfoCircleOutlined />
							</span>
						</p>
					</Tooltip>
				</div>
			</div>

			<h4>
				{getLang === 'বাং' ? 'সাপ্লায়ারের নাম' : 'Supplier Name'} :{' '}
				{info?.supplier?.name}{' '}
			</h4>
			<h4>
				{getLang === 'বাং' ? 'সাপ্লায়ারের ফোন' : 'Supplier Phone'} :{' '}
				{info?.supplier?.contact_no}{' '}
			</h4>
			<h4>
				{getLang === 'বাং' ? 'টিম লিডার' : 'Team Leader'} :{info?.teamLeader}{' '}
			</h4>
			<h4>
				{getLang === 'বাং' ? 'টিমের সদস্য' : 'Total member'} :{' '}
				{info?.totalMembers}{' '}
			</h4>
			<h4>
				{getLang === 'বাং' ? 'লিডার ফোন' : 'Leader Phone'} : {info?.leaderPhone}{' '}
			</h4>
		</div>
	);
};

export default Statics;
