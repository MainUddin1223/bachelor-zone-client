import { Col, Row } from 'antd'
import React from 'react'
import Styles from './Dashboard.module.css'
import Profile from './Profile/Profile'
import Statics from './Statics/Statics'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import History from './History/History'
import Meals from './Meals/Meals'


const Dashboard = () => {
  return (
    <>
    <Header/>
      <div className={Styles.container}>
          {/* <Row gutter={[20,20]}>
              <Col span={12}>
            ব্যালেন্স
              </Col>
              <Col span={12}>
            বকেয়া
              </Col>
              <Col span={12}>
            অর্ডারকৃত খাবার
              </Col>
              <Col span={12}>
            খবার অর্ডার করুন
              </Col>
              <Col span={12}>
                এই মাসের অর্ডার দেখুন
              </Col>
              <Col span={12}>
                বাকী বক্স
              </Col>
              <Col span={12}>
                বাকী টিফিন
              </Col>
              <Col span={12}>
                পাসওয়ার্ড পরিবর্তন করুন
              </Col>
              <Col span={12}>
                প্রোফাইল পরিবর্তন করুন
              </Col>
          </Row> */}
      <Row>
        <Col xs={24} sm={12}>
        <Profile/>
        </Col>
        <Col xs={24} sm={12}>
        <Statics/>
        </Col>
        <Col xs={24} sm={12}>
        <Meals/>
        </Col>
        <Col xs={24} sm={12}>
        <History/>
        </Col>
        </Row>
    </div>
        <Footer/>
    </>
  )
}

export default Dashboard