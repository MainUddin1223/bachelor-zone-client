'use client'
import { useCallback, useEffect, useState } from 'react';
import { Button, DatePicker, Space, Table,Modal, InputNumber } from 'antd';
import type { TableColumnsType,DatePickerProps  } from 'antd';

import Styles from './Meals.module.css';
import EditMeals from '@/components/EditMeals/EditMeals';

interface DataType {
  key: React.Key;
  date: string;
  dinner: number;
  lunch: number;
  tiffin: number;
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
        <p>Dinner: {details?.dinner}</p>
        <p>Lunch: {details?.lunch}</p>
        <p>Tiffin: {details?.tiffin}</p>
        <p>Order Date: {details?.order_date}</p>
        <Button>Edit Meals</Button>
      </div>
    )
  }
];

const mobileData: MobileDataType[] = [
  {
    key: 1,
    details: {
      date: '2024-03-01',
      lunch: 1,
      dinner: 1,
      tiffin: 2,
      order_date: '2024-02-28'
    }
  },
  {
    key: 2,
    details: {
      date: '2024-03-01',
      lunch: 1,
      dinner: 1,
      tiffin: 2,
      order_date: '2024-02-28'
    }
  },
  {
    key: 3,
    details: {
      date: '2024-03-01',
      lunch: 1,
      dinner: 1,
      tiffin: 2,
      order_date: '2024-02-28'
    }
  },
  {
    key: 4,
    details: {
      date: '2024-03-01',
      lunch: 1,
      dinner: 1,
      tiffin: 2,
      order_date: '2024-02-28'
    }
  },
];


const data: DataType[] = [
  {
    key: 1,
    date: '2024-03-01',
    lunch: 1,
    dinner: 3,
    tiffin: 2,
    order_date: '2024-02-28'
  },
  {
    key: 2,
    date: '2024-03-01',
    lunch: 1,
    dinner: 1,
    tiffin: 2,
    order_date: '2024-02-28'
  },
  {
    key: 3,
    date: '2024-03-01',
    lunch: 1,
    dinner: 1,
    tiffin: 2,
    order_date: '2024-02-28'
  },
  {
    key: 4,
    date: '2024-03-01',
    lunch: 1,
    dinner: 1,
    tiffin: 2,
    order_date: '2024-02-28'
  },
];

const Meals = () => {
    const screenSize = typeof window !== "undefined"? window.innerWidth : 1000
  const isMobile = screenSize < 577;

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
  {
    title: 'Action',
    dataIndex:"action",
    render: (_: any, details:DataType) => {

      return (
             <div>
            <EditMeals details={details} />
      </div>
      )
    }

    
  },
];

  return (
    <div>
      <div>
        <h3 className={Styles.meals_header}>Meals</h3>
        <p className={Styles.meals_info}>Your Upcoming meals. You can change meal quantity or cancel you meal before 12 hours.</p>
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
            /> 
            }
        </div>
      </div>
    </div>
  )
}

export default Meals;
