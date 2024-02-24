import { Col, Row } from 'antd'
import React from 'react'
import Styles from './Dashboard.module.css'


const Dashboard = () => {
  return (
      <div className={Styles.container}>
          <Row gutter={[20,20]}>
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
          </Row>
    </div>
  )
}

export default Dashboard