'use client'
import Styles from './Meals.module.css';
import { useState } from 'react';
import { Button, Divider, Radio, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  date: string;
  dinner: number;
  lunch: number;
  tiffin: number;
  order_date: string;
}

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
    lunch: 1,
    dinner:1,
    tiffin: 2,
    order_date: '2024-02-28'},
  {
    key: 2,
    date: '2024-03-01',
     lunch: 1,
    dinner:1,
    tiffin: 2,
    order_date: '2024-02-28'},
  {
    key: 3,
    date: '2024-03-01',
    lunch: 1,
    dinner:1,
    tiffin: 2,
    order_date: '2024-02-28'},
  {
    key: 4,
    date: '2024-03-01',
     lunch: 1,
    dinner:1,
    tiffin: 2,
    order_date: '2024-02-28'},
];

const Meals = () => {
  return (
      <div>
      <div>
        <h4>Meals</h4>
        <p>Upcoming meals</p>
        {/* <div>
          <h3>Total cost of this month ৳ 3000</h3>
          <h3>Total Meals 47</h3>
        </div> */}
        <div>
<Button>Order Meal</Button>
      <Table
        columns={columns}
            dataSource={data}
            pagination={false}
      />
    </div>
          </div>
    </div>
  )
}

export default Meals