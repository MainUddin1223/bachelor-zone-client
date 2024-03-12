'use client'
import {  DatePicker, Table } from 'antd';
import type { DatePickerProps, TableColumnsType } from 'antd';

import Styles from './History.module.css';
import { useAppSelector } from '@/redux/hooks';

interface DataType {
  key: React.Key;
  date: string;
  lunch: number;
  dinner:number,
  lunch_tiffin: number;
  dinner_tiffin: number;
  status:'pending'|'received'
}

interface MobileDataType {
  key: React.Key;
  details: Partial<DataType>;
}


const mobileData: MobileDataType[] = [
  {
    key: 1,
    details: {
      date: '2024-03-01',
    lunch: 1,
    dinner: 2,
    lunch_tiffin: 1,
    dinner_tiffin:1,
    status: 'received',
    }
  },
  {
    key: 2,
        details: {
      date: '2024-03-01',
    lunch: 1,
    dinner: 2,
    lunch_tiffin: 1,
    dinner_tiffin:1,
    status: 'received',
    }
  },
  {
    key: 3,
        details: {
      date: '2024-03-01',
    lunch: 1,
    dinner: 2,
    lunch_tiffin: 1,
    dinner_tiffin:1,
    status: 'received',
    }
  },
  {
    key: 4,
        details: {
       date: '2024-03-01',
    lunch: 1,
    dinner: 2,
    lunch_tiffin: 1,
    dinner_tiffin:1,
    status: 'received',
    }
  },
];


const data: DataType[] = [
  {
    key: 1,
    date: '2024-03-01',
    lunch: 1,
    dinner: 2,
    lunch_tiffin: 1,
    dinner_tiffin:1,
    status: 'received',
  },
];

const Meals = () => {
  const screenSize = typeof window !== "undefined"? window.innerWidth : 1000
  const isMobile = screenSize < 768;
   const { basicData } = useAppSelector((state) => state.basicSlice);
  const getLang = basicData.lang;
  
  const columns: TableColumnsType<DataType> = [
   {
      title: <span>
      {getLang === 'বাং' ?"তারিখ": "Date"}
    </span>,
    dataIndex: 'date'
  },
  {
    title: <span>
      {getLang === 'বাং' ?"দুপুররে খাবার": "Lunch"}
    </span>,
    dataIndex: 'lunch',
  },
  {
    title: <span>
      {getLang === 'বাং' ?"রাতের খাবার": "Dinner"}
    </span>,
    dataIndex: 'dinner',
  },
  {
    title: <span>
      {getLang === 'বাং' ?"দুপুরের টিফিন": "Lunch Tiffin"}
    </span>,
    dataIndex: 'lunch_tiffin',
  },
  {
   title: <span>
      {getLang === 'বাং' ?"রাতের টিফিন": "Dinner Tiffin"}
    </span>,
    dataIndex: 'dinner_tiffin',
  },
  {
   title: <span>
      {getLang === 'বাং' ?"হাল": "Status"}
    </span>,
    dataIndex: 'status',
  },
  ];
  const mobileColumns: TableColumnsType<MobileDataType> = [
  {
    title: <>{getLang === 'বাং' ?"বিস্তারিত": "Details"}</>,
    dataIndex: 'details',
    render: (details) => (
      <div>
         <p>{getLang === 'বাং' ?"তারিখ": "Date"}: {details?.date}</p>
        <p>{getLang === 'বাং' ?"দুপুররে খাবার": "Lunch"}: {details?.dinner}</p>
        <p>{getLang === 'বাং' ?"রাতের খাবার": "Dinner"}: {details?.lunch}</p>
        <p>{getLang === 'বাং' ?"দুপুরের টিফিন": "Lunch Tiffin"}: {details?.lunch_tiffin}</p>
        <p>{getLang === 'বাং' ?"রাতের টিফিন": "Dinner Tiffin"}: {details?.dinner_tiffin}</p>
        <p>{getLang === 'বাং' ?"হাল": "Status"}: {details?.dinner_tiffin}</p>
      </div>
    )
  }
  ];
  return (
    <div>
      <div>
        <h3 className={Styles.history_header}>{getLang === 'বাং' ?"গ্রহনকৃত খাবারের তালিকা": "Meals History"}</h3>
        <p className={Styles.history_info}> {getLang === 'বাং' ? `গত 30 দিনের গ্রহনকৃত খাবারের বিস্তারিত ।` : "Your consumed meal details for last 30 days"}</p>
        <div>
          {isMobile ?
               <Table
              columns={mobileColumns}
              dataSource={mobileData}
            />:<Table
              columns={columns}
              dataSource={data}
            /> }
        </div>
      </div>
    </div>
  )
}

export default Meals;
