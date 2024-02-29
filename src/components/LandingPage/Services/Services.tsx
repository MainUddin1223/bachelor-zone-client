import { Col, Row } from 'antd'
import Styles from './Services.module.css'
const Services = () => {
  return (
      <div>
          <h1>আমাদের সেবাসমূহ</h1>
          <div>
              <Row gutter={20}>
                  <Col xs={24} md={8} lg={8}>
                  থাকার ব্যাবস্থা
                  </Col>
                  <Col xs={24} md={8} lg={8}>
                  খাবার ব্যাবস্থা
                  </Col>
                 <Col xs={24} md={8} lg={8}>
                  লাঞ্চ বা ডিনার নেওয়ার ব্যাবস্থা
                  </Col>
              </Row>
          </div>
    </div>
  )
}

export default Services