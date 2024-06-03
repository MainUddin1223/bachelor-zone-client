import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Styles from './style.module.css';
import Image from 'next/image';
import system_img from '@/assets/how_to_join.png';
import { Steps } from 'antd';
import { costing } from '@/utils/cost';

const HowToJoin = () => {
	return (
		<div className={Styles.container}>
			<h1 className={Styles.header}>How to join us</h1>
			<h2 style={{ textAlign: 'center' }}>
				We work beyond conventional system. By joining us you will get next
				level experience.
			</h2>
			<div className={Styles.delivery_terms_container}>
				<div className={Styles.condition_container}>
					<div className={Styles.condition_title}>
						To join us you have to go through below process{' '}
						<ArrowRightOutlined
							style={{ fontSize: '17px', color: 'var(--primary-color)' }}
						/>
					</div>
					<Steps
						current={3}
						direction="vertical"
						items={[
							{
								title: <h4>Registration</h4>,
								description: (
									<div className={Styles.description_container}>
										<p style={{ fontSize: '16px' }}>
											<b>Requirements :</b>
										</p>
										<p>Your phone number</p>
										<p>Your name</p>
										<p>Password</p>
									</div>
								),
							},
							{
								title: <h4>Claim your account</h4>,
								description: (
									<div className={Styles.description_container}>
										<p>
											After Registration you have to claim your account by
											admin. For that you have to contact with admin.
										</p>
										<p style={{ fontSize: '16px' }}>
											<b>Requirements :</b>
										</p>
										<p>1. Your location</p>
										<p>2. Choose a team</p>
									</div>
								),
							},
							{
								title: 'Initial Payment',
								description: (
									<div className={Styles.description_container}>
										<p>You have to pay ৳ 500 while claiming your account</p>
										<p style={{ fontSize: '16px' }}>
											<b>Distribution :</b>
										</p>
										<p>1. Tiffin box fee : {costing.tiffinBoxFee}</p>
										<p>2. Registration Fee : {costing?.registrationFee}</p>
										<p>2. Balance recharge : {costing?.minimumRecharge}</p>
										<p>
											NB : ৳ {costing?.minimumRecharge} will add in your
											account.
										</p>
									</div>
								),
							},
						]}
					/>
				</div>
				<div className={Styles.img_container}>
					<Image src={system_img} alt="delivery_img" layout="responsive" />
				</div>
			</div>
		</div>
	);
};

export default HowToJoin;
