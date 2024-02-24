import { Flex } from 'antd'
import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
      <div className={Styles.container}>
          <div className={Styles.header_container}>       
          <Flex justify='space-between'>
              <div> 
                  <h3>Bachelor Zone</h3>
              </div>
              <div>
                  login
              </div>
          </Flex>
          </div>
    </div>
  )
}

export default Header