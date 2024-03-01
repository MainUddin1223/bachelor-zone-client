'use client'
import { Col, Row } from 'antd'
import Styles from './Services.module.css'
import { useAppSelector } from '@/redux/hooks';
const Services = () => {
  const { basicData } = useAppSelector((state) => state.basicSlice);
   const getLang = basicData.lang;
  return (
      <div className={Styles.container}>
      <h1 className={Styles.service_header}>{getLang === 'বাং'?'আমাদের সেবাসমূহ':'Our Services' }</h1>
          <div>
              <Row gutter={20}>
          <Col xs={24} md={8} lg={8}>
            {getLang === 'বাং'?'থাকার ব্যাবস্থা':'Accommodation' }
                  
                  </Col>
          <Col xs={24} md={8} lg={8}>
             {getLang === 'বাং'?'খাবার ব্যাবস্থা':'Meal Facility' }
                  
                  </Col>
          <Col xs={24} md={8} lg={8}>
             {getLang === 'বাং'?'লাঞ্চ বা ডিনার নেওয়ার ব্যাবস্থা':'Takeaway' }
                  
                  </Col>
              </Row>
          </div>
    </div>
  )
}

export default Services