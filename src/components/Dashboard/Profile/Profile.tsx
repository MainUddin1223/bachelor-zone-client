import Image from 'next/image';
import Styles from './Profile.module.css';
import profile_img from '@/assets/profile.png';

const Profile = () => {
  return (
      <div>
          <div>
              <Image src={profile_img} alt='profile_img' width={50} />
              <div>
                  <p>Rahim Ullah</p>
                  <p>Basundara ltd</p>
                  <p>Dhaka,bangladesh</p>
              </div>
          </div>
          <div>
              <h4>Balance : ৳ 1200</h4>
              <h4>Dew : ৳ 00</h4>
          </div>
    </div>
  )
}

export default Profile