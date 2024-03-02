'use client'
import Styles from './Header.module.css'
import { Switch, Flex, ConfigProvider } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import Link from 'next/link';
import { addBasicData } from '@/redux/slice/basicSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Header = () => {
  const { basicData } = useAppSelector((state) => state.basicSlice);
  const dispatch = useAppDispatch()
  const getSetLanguage = getFromLocalStorage('lang');
  
  useEffect(() => { 
      if (!getSetLanguage) {
        setToLocalStorage('lang', 'বাং')
        dispatch(addBasicData({lang:getSetLanguage}))
      } else {
         dispatch(addBasicData({lang:getSetLanguage}))
    }
    }, [basicData.lang,getSetLanguage])

  
    const handleChangeLanguage = (isChecked: boolean) => {
        if (isChecked) {
          setToLocalStorage('lang', 'বাং')
          dispatch(addBasicData({lang:'বাং'}))
        } else {
          setToLocalStorage('lang', 'eng')
          dispatch(addBasicData({lang:'eng'}))
        }
  }
  
  return (
      <div className={Styles.container}>
          <div className={Styles.header_container}>       
          <Flex justify='space-between' align='center'>
              <div> 
                  <h1 className={Styles.text_logo}>Bachelor Zone</h1>
              </div>
                  <div className={Styles.login_container}>
                      <Link href={'#'} className={Styles.login_button}>Login</Link>
                      <ConfigProvider
  theme={{
    components: {
      Switch: {
        colorTextQuaternary:'#1677ff'
      },
    },
  }}
>
                          <Switch checkedChildren="বাং" unCheckedChildren="ENG" value={basicData.lang== 'eng'?false:true } onChange={(value)=>handleChangeLanguage(value)}/>
</ConfigProvider>

              </div>
          </Flex>
          </div>
    </div>
  )
}

export default Header