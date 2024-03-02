'use client'
import { Col, Row } from 'antd'
import Styles from './Services.module.css'
import { useAppSelector } from '@/redux/hooks';
import approval_img from '@/assets/approval.png'
import Image from 'next/image';
const Services = () => {
  const { basicData } = useAppSelector((state) => state.basicSlice);
   const getLang = basicData.lang;
  return (
      <div className={Styles.container}>
      <h1 className={Styles.service_header}>{getLang === 'বাং'?'আমাদের সেবাসমূহ':'Our Services' }</h1>
          <div>
              <Row gutter={[20,20]}>
          <Col xs={24} md={8} lg={8}>
            <div className={Styles.service_card}>
<Image src={approval_img} alt='approval' className={Styles.approval_img}/>
              <p>
                {getLang === 'বাং'?'থাকার ব্যাবস্থা':'Accommodation' }
              </p>
            </div>
                  
                  </Col>
          <Col xs={24} md={8} lg={8}>
                        <div className={Styles.service_card}>
              <Image src={approval_img} alt='approval' className={Styles.approval_img} />
              <p>
                {getLang === 'বাং'?'খাবার ব্যাবস্থা':'Meal Facility' }
              </p>
            </div>
             
                  
                  </Col>
          <Col xs={24} md={8} lg={8}>
            
                              <div className={Styles.service_card}>
<Image src={approval_img} alt='approval' className={Styles.approval_img}/>
              <p>
                {getLang === 'বাং'?'লাঞ্চ বা ডিনার নেওয়ার ব্যাবস্থা':'Takeaway' }
              </p>
            </div>
                  </Col>
              </Row>
          </div>
    </div>
  )
}

export default Services