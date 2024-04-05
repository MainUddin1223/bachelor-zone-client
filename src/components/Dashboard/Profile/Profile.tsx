'use client';
import Image from 'next/image';
import Styles from './Profile.module.css';
import profile_img from '@/assets/profile.png';
import { Avatar, Col, Row } from 'antd';
import { useGetInfoQuery } from '@/redux/api/userApi';
import Statics from '../Statics/Statics';
import { info } from 'console';
import Loader from '@/components/Loader/Loader';

const Profile = () => {
	const { data, isLoading } = useGetInfoQuery(undefined);

	return (
		<Row gutter={[20, 20]}>
			<Col md={12} xs={24}>
				<div className={Styles.container}>
					{isLoading ? (
						<div className={Styles.loader_container}>
							<Loader />
						</div>
					) : (
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
		</Row>
	);
};

export default Profile;
