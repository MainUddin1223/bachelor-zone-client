'use client'
import Styles from './History.module.css';
import { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  date: string;
  meals: number;
  tiffin: number;
  order_date: string;
  status:'pending'|'received'
}

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
    title: 'Order Date',
    dataIndex: 'order_date',
  },
   {
    title: "Status",
    dataIndex:"status"
  },
];

const data: DataType[] = [
  {
    key: 1,
    date: '2024-03-01',
    meals: 2,
    tiffin: 2,
    status:"received",
    order_date: '2024-02-28'},
  {
    key: 2,
    date: '2024-03-01',
    meals: 2,
    tiffin: 2,
    status:"received",
    order_date: '2024-02-28'},
  {
    key: 3,
    date: '2024-03-01',
    meals: 2,
    tiffin: 2,
    status:"received",
    order_date: '2024-02-28'},
  {
    key: 4,
    date: '2024-03-01',
    meals: 2,
    tiffin: 2,
    status:"received",
    order_date: '2024-02-28'},
];

const History = () => {
  return (
      <div>
      <div>
        <h4>History</h4>
        <p>Meals and transaction history of February</p>
        <div>
          <h3>Total cost of this month ৳ 3000</h3>
          <h3>Total Meals 47</h3>
        </div>
        <div>

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

export default History