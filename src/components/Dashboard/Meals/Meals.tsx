'use client'
import { useEffect, useState } from 'react';
import { Button, DatePicker, Space, Table,Modal, InputNumber } from 'antd';
import type { TableColumnsType,DatePickerProps  } from 'antd';

import Styles from './Meals.module.css';

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
    dinner: 1,
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
  const isMobile = screenSize<577
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
    setOpen(true);
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(dateString);
};

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <div>
      <div>
        <h4>Meals</h4>
        <p>Upcoming meals</p>
        <div>
           <Modal
        title="Order your Meals"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
            <div>
              <DatePicker onChange={onChange} />
              <div>
                <p>Lunch</p>
                 <InputNumber min={1} max={5} defaultValue={1} onChange={(value:any)=>console.log(value)} />
              </div>
              <div>
                <p>Dinner</p>
                <InputNumber min={1} max={5} defaultValue={1} onChange={(value:any)=>console.log(value)} />
              </div>
              <div>
                <p>Tiffin</p>
                <InputNumber min={1} max={5} defaultValue={1} onChange={(value:any)=>console.log(value)} />
              </div>
        </div>
      </Modal>
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
