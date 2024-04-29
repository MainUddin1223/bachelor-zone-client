'use client';
import Image from 'next/image';
import Styles from './Profile.module.css';
import profile_img from '@/assets/profile.png';
import { Avatar, Col, Row } from 'antd';
import { useGetInfoQuery } from '@/redux/api/userApi';
import Statics from '../Statics/Statics';
import { info } from 'console';
import Loader from '@/components/Loader/Loader';
import Order from '../Order/Order';
import TeamInfo from '../TeamInfo/TeamInfo';
import { SettingFilled } from '@ant-design/icons';

const Profile = () => {
	const { data, isLoading } = useGetInfoQuery(undefined);
	const teamInfo = data?.teamInfo;
	const showTeamDiv = teamInfo?.id ? {} : { display: 'none' };
	const divWidth = teamInfo?.id ? 12 : 24;
	console.log(teamInfo);

	return (
		<Row gutter={[20, 20]}>
			<Col md={12} xs={24}>
				<div className={Styles.container}>
					{isLoading ? (
						<div className={Styles.loader_container}>
							<Loader />
						</div>
					) : (
						<div>
							<div className={Styles.profile_container}>
								<div>
									<Avatar
										shape="square"
										gap={5}
										size={110}
										icon={
											<Image
												src={profile_img}
												alt="profile_img"
												width={100}
												layout="responsive"
											/>
										}
									/>
								</div>
								<div className={Styles.profile_info_container}>
									<p className={Styles.user_name}>Name : {data.name}</p>
									<h4>Balance : ৳ {data?.balance}</h4>
									<p>Id : {data.virtual_id}</p>
									<p>Phone : {data.phone}</p>
									<p>Address: {data.address}</p>
								</div>
								<SettingFilled className={Styles.setting} />
							</div>
						</div>
					)}
				</div>
			</Col>
			<Col md={12} xs={24}>
				<div className={Styles.container}>
					{isLoading ? (
						<div className={Styles.loader_container}>
							<Loader />
						</div>
					) : (
						<Statics info={data} />
					)}
				</div>
			</Col>
			<Col md={12} xs={24} style={showTeamDiv}>
				<div className={Styles.container}>
					{teamInfo?.id ? <TeamInfo teamInfo={teamInfo} /> : <></>}
				</div>
			</Col>
			<Col md={divWidth} xs={24}>
				<Order />
			</Col>
		</Row>
	);
};

export default Profile;
