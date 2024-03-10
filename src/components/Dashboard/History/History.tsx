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
    title: 'Meals',
    dataIndex: 'meals',
  },
    {
    title: 'Tiffin',
    dataIndex: 'tiffin',
  },
  {
    title: 'Status',
    dataIndex: 'status',
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
  const screenSize = typeof window !== "undefined"? window.innerWidth : 1000
  const isMobile = screenSize < 768;
  return (
    <div>
      <div>
        <h3 className={Styles.history_header}>Meal History</h3>
        <p className={Styles.history_info}>Your consumed meal details for January</p>
        <div>
          {isMobile ?
               <Table
              columns={mobileColumns}
              dataSource={mobileData}
              pagination={false}
            />:<Table
              columns={columns}
              dataSource={data}
              pagination={false}
            /> }
        </div>
      </div>
    </div>
  )
}

export default Meals;
