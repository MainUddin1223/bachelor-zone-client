'use client'
import { useAppSelector } from '@/redux/hooks';
import Styles from './About.module.css';
import about_img from '@/assets/about.png'

const About = () => {
    const { basicData } = useAppSelector((state) => state.basicSlice);
   const getLang = basicData.lang;
  return (
      <div className={Styles.container}>
      <h1 className={Styles.heading}>{getLang === 'বাং' ? "কেন আমাদের সাথে যুক্ত হবেন ?" : "Why Us ?"}</h1>
 
          <p>
        {
          getLang === 'বাং'?"ব্যচেলরদের জন্য সবচেয়ে চ্যালেঞ্জের দুইটি বিষয় হলো খাবার এবং থাকার ব্যাবস্থা নিশ্চিত করা । একজন ব্যচেলের লাইফে এই সমস্যাটা লেগেই থাকে । এই সমস্যা সমাধানে আমরা নিয়ে এসেছি ব্যচেলর জোন । এটি একটি ব্যচেলর কেন্দ্রিক সেবা ব্যাবস্থা । আমরা ব্যচেলরদের জন্য নিয়ে এসেছি স্বল্প ব্যায়ে সর্বোচ্ছ সেবা । আমাদের সাথে যুক্ত হয়ে আপনি আপনার থাকা এবং খাবার সমস্যা স্থায়ীভাবে সমাধান করুন ।" : "Two of the most challenging things for bachelors are securing food and accommodation. This problem persists in the life of a bachelor. To solve this problem we have brought bachelor zone. It is a bachelor centric service system. We bring the best services for bachelors at low cost.By joining us you can solve your accommodation and food problem permanently."
              }
          </p>
    </div>
  )
}

export default About