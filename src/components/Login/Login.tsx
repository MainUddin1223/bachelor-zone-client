'use client'
import { Button, Col, Row } from 'antd'
import Styles from './Login.module.css'
import login_pic from '@/assets/login.png'
import Image from 'next/image'
import { useAppSelector } from '@/redux/hooks'
import { Input } from 'antd';

const Login = () => {
      const { basicData } = useAppSelector((state) => state.basicSlice);
    const getLang = basicData.lang;
  return (
      <div className={Styles.container}>
          <Row gutter={[20,20]} align='middle' justify='center'>
              <Col xs={24} md={12}>
                  <Image src={login_pic} width={50} height={50} alt='login_pic' layout='responsive'/>
              </Col>
              <Col xs={24} md={12}>
                  <div>
                      <h2 className={Styles.login_heading}>{ getLang == 'বাং' ?'লগইন করুন':'LOGIN'}</h2>
                      <div>
                          <div className={Styles.input_container}>
                              <p>{ getLang == 'বাং' ?'ফোন নাম্বর':'Phone number'}</p>
                              <Input placeholder="+8801*********" />
                          </div>
                          <div className={Styles.input_container}>
                              <p>{ getLang == 'বাং' ?'পাসওয়ার্ড':'Password'}</p>
                              <Input.Password placeholder="********" type='password'/>
                          </div>
                          <Button>Login</Button>
                      </div>
                      <div className={Styles.input_container}>  
                      <p>New to Bachelor Zone ? Register now</p>
                      <p>Contact with us</p>
                      </div>
                  </div>
              </Col>
          </Row>
    </div>
  )
}

export default Login