import hero from '@/assets/hero.jpg'
import Image from 'next/image'
import Styles from './Hero.module.css'
import { Button } from 'antd'

const Hero = () => {
  return (
      <div className={Styles.container}>
              <Image src={hero} height={100} width={100} alt='hero'  className={Styles.hero_image } />
          <div className={Styles.hero_description}>
              <h1>আপনার ব্যক্তিগত সময় উপভোগ করুন</h1>
              <p>আপনার খাবার এবং থাকার দায়িত্ব আমাদের উপর ছেড়ে দিন</p>
              {/* <Button>Register Now</Button> */}
              <Button>নিবন্ধন করুন</Button>
</div>
    </div>
  )
}

export default Hero