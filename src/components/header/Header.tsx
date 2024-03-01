'use client'
import Styles from './Header.module.css'
import { Switch, Flex, ConfigProvider } from 'antd';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';

const Header = () => {
    const getSetLanguage = getFromLocalStorage('lang');
    useEffect(() => {  
      if (!getSetLanguage) {
        setToLocalStorage('lang','eng')
      }
    },[])
    const handleChangeLanguage = (isChecked: boolean) => {
        if (isChecked) {
            setToLocalStorage('lang','বাং')
        } else {
             setToLocalStorage('lang','eng')
        }
    }
  return (
      <div className={Styles.container}>
          <div className={Styles.header_container}>       
          <Flex justify='space-between'>
              <div> 
                  <h3>Bachelor Zone</h3>
              </div>
                  <div>
                      Login
                      <ConfigProvider
  theme={{
    components: {
      Switch: {
        colorTextQuaternary:'#1677ff'
      },
    },
  }}
>
                          <Switch checkedChildren="বাং" unCheckedChildren="ENG" defaultChecked={getSetLanguage== 'বাং'?true:false } onChange={(value)=>handleChangeLanguage(value)}/>
</ConfigProvider>

              </div>
          </Flex>
          </div>
    </div>
  )
}

export default Header