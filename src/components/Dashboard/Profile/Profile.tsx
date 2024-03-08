
import Image from 'next/image';
import Styles from './Profile.module.css';
import profile_img from '@/assets/profile.png';
import { Avatar } from 'antd';

const Profile = () => {

  return (
      <div className={Styles.container}>
          <div className={Styles.profile_container}>
              <div>
                  <Avatar shape="square" gap={5} size={110} icon={<Image src={profile_img} alt='profile_img' width={100} layout='responsive'/>} />
              </div>
              <div className={Styles.profile_info_container}>
                  <p className={Styles.user_name}>Name : Rahim Ullah</p>
                  <p>Id : SB1b2</p>
                  <p>Basundara ltd</p>
                  <p>Dhaka,bangladesh</p>
              </div>
          </div>
    </div>
  )
}

export default Profile