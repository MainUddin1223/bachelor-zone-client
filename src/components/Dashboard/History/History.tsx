'use client'
import { useEffect, useState } from 'react';
import { Button, Divider, Radio, Table } from 'antd';
import type { TableColumnsType } from 'antd';

import Styles from './History.module.css';

interface DataType {
  key: React.Key;
  date: string;
  meals: number;
  tiffin: number;
  status:'pending'|'received'
  order_date: string;
}

interface MobileDataType {
  key: React.Key;
  details: Partial<DataType>;
}

const mobileColumns: TableColumnsType<MobileDataType> = [
  {
    title: "Details",
    dataIndex: 'details',
    render: (details) => (
      <div>
        <p>Date: {details?.date}</p>
        <p>Meals: {details?.meals}</p>
        <p>Tiffin: {details?.tiffin}</p>
        <p>Status: {details?.status}</p>
        <p>Order Date: {details?.order_date}</p>
      </div>
    )
  }
];

const mobileData: MobileDataType[] = [
  {
    key: 1,
    details: {
      date: '2024-03-01',
      meals: 1,
      tiffin: 2,
      status:'received',
      order_date: '2024-02-28'
    }
  },
  {
    key: 2,
        details: {
      date: '2024-03-01',
      meals: 1,
      tiffin: 2,
      status:'received',
      order_date: '2024-02-28'
    }
  },
  {
    key: 3,
        details: {
      date: '2024-03-01',
      meals: 1,
      tiffin: 2,
      status:'received',
      order_date: '2024-02-28'
    }
  },
  {
    key: 4,
        details: {
      date: '2024-03-01',
      meals: 1,
      tiffin: 2,
      status:'received',
      order_date: '2024-02-28'
    }
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: 'date',
    dataIndex: 'date'
  },
  {
    title: 'Lunch',
    dataIndex: 'lunch',
  },
  {
    title: 'Dinner',
    dataIndex: 'dinner',
  },
  {
    title: 'Tiffin',
    dataIndex: 'tiffin',
  },
  {
    title: 'Order Date',
    dataIndex: 'order_date',
  },
];

const data: DataType[] = [
  {
    key: 1,
    date: '2024-03-01',
    meals: 1,
    status: 'received',
    tiffin: 2,
    order_date: '2024-02-28'
  },
  {
    key: 2,
     date: '2024-03-01',
    meals: 1,
    status: 'received',
    tiffin: 2,
    order_date: '2024-02-28'
  },
  {
    key: 3,
    date: '2024-03-01',
    meals: 1,
    status: 'received',
    tiffin: 2,
    order_date: '2024-02-28'
  },
  {
    key: 4,
    date: '2024-03-01',
    meals: 1,
    status: 'received',
    tiffin: 2,
    order_date: '2024-02-28'
  },
];

const Meals = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 576); 
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth > 576);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div>
        <h4>Meal History</h4>
        <p>Your consumed meal details for January</p>
        <div>
          <Button>Order Meal</Button>
          {isMobile ?
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
            /> :
            <Table
              columns={mobileColumns}
              dataSource={mobileData}
              pagination={false}
            />}
        </div>
      </div>
    </div>
  )
}

export default Meals;
