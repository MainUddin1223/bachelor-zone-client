'use client'
import hero from '@/assets/hero.jpg'
import Image from 'next/image'
import Styles from './Hero.module.css'
import { Button } from 'antd'
import { useAppSelector } from '@/redux/hooks';

const Hero = () => {
  const { basicData } = useAppSelector((state) => state.basicSlice);
  const getLang = basicData.lang;
  console.log(getLang)
  return (
      <div className={Styles.container}>
              <Image src={hero} height={100} width={100} alt='hero'  className={Styles.hero_image } />
          <div className={Styles.hero_description}>
        <h1>{ getLang === 'বাং'?'আপনার ব্যক্তিগত সময় উপভোগ করুন':"Enjoy your personal life"}</h1>
        <p>{ getLang === 'বাং'?'আপনার খাবার এবং থাকার দায়িত্ব আমাদের উপর ছেড়ে দিন':'We will take care of your food and accommodation'}</p>
              {/* <Button>Register Now</Button> */}
              <Button>{getLang === 'বাং'?'নিবন্ধন করুন':"Register Now"}</Button>
</div>
    </div>
  )
}

export default Hero