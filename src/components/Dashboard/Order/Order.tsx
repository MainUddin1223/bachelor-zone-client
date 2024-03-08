'use client'
import { Button, DatePicker, DatePickerProps, InputNumber, Modal } from 'antd'
import Styles from './Order.module.css'
import { useState } from 'react';
import dayjs from 'dayjs';

const Order = () => {
    const [open, setOpen] = useState(false);

    const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()).format('YYYY-MM-DD'));

  const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    
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
      <div className={Styles.container}>
          <h3>Order your meals</h3>
                     <Modal
        title="Order your Meals"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
      </Modal>
          <div>
              <p>Select a date</p>
              <DatePicker onChange={onChange} defaultValue={dayjs(selectedDate)}/>
               <div className={Styles.lunch_container}>
              <div>
                <p>Lunch</p>
                 <InputNumber min={0} max={5} defaultValue={0} onChange={(value:any)=>console.log(value)} />
              </div>
              <div>
                <p>Dinner</p>
                <InputNumber min={0} max={5} defaultValue={0} onChange={(value:any)=>console.log(value)} />
              </div>
              <div>
                <p>Tiffin</p>
                <InputNumber min={0} max={2} defaultValue={0} onChange={(value:any)=>console.log(value)} />
              </div>
              </div>
              <Button type='primary' onClick={()=>setOpen(true)}>Order Meal</Button>
        </div>
    </div>
  )
}

export default Order