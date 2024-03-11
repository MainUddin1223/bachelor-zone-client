'use client'

import { InfoCircleOutlined } from '@ant-design/icons';
import Styles from './Statics.module.css';
import {  Tooltip } from 'antd';
import { useAppSelector } from '@/redux/hooks';

const Statics = () => {
      const { basicData } = useAppSelector((state) => state.basicSlice);
   const getLang = basicData.lang;
  return (
      <div className={Styles.container}>
      <div className={Styles.info_container}>
        
        <h4>{getLang === 'বাং' ?"ব্যলেন্স": "Balance"}: ৳ 1200</h4>
        <Tooltip placement='bottomRight' title={
          <div className={Styles.expenses_info}>
            <h3>{getLang === 'বাং' ? "যাবতীয় খরচ" : "Expenses Details"} </h3>
            <div className={Styles.expenses}> 
              <p>{getLang === 'বাং' ?"রুমভাড়া": "Rent"} : ৳ 1500 </p>
              <p>{getLang === 'বাং' ?"খানা বিল : ৳ 50 / প্রতিবেলা " : "Meal Bill : ৳ 50 / Meal"} </p>
              <p>{getLang === 'বাং' ?"বাবুর্চি বিল": "Cook Bill"} : ৳ 200 </p>
              <p>{getLang === 'বাং' ?"পরিষ্করণ বিল": "Cleaning Bill"} : ৳ 100</p>
            </div>
        </div>
        } trigger="click" defaultOpen={false}>
          <p className={Styles.info}><span>{getLang === 'বাং' ?"খরচ": "Cost"}</span> <span><InfoCircleOutlined /></span></p>
        </Tooltip>
  </div>
              <h4>{getLang === 'বাং' ?"বকেয়া": "Dew"} : ৳ 00</h4>
              <h4>{getLang === 'বাং' ?"দেওনা বক্স": "Dew Container"} : 0 </h4>
              <h4> {getLang === 'বাং' ?"দেওনা টিফিনবক্স": "Dew Tiffin Carrier"}: 0</h4>
    </div>
  )
}

export default Statics