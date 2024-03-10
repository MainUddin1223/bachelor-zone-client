'use client'

import Styles from './EditMeals.module.css'
import dayjs from "dayjs"
import { useState } from "react";
import {
  Button,
  DatePicker,
  DatePickerProps,
  InputNumber,
  Modal
} from "antd"


const EditMeals = ({ details }: { details:any ,}) => {
  const [open,setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()).format('YYYY-MM-DD'));

  const [updatedData, setUpdatedData] = useState({
    ...details
  })
  console.log(updatedData)

const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      console.log(updatedData)
      setUpdatedData(details)
    }, 2000);
  };


const handleCancel = (details:any) => {
    setUpdatedData(details)
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Edit Meals</Button>
      <Button danger>Cancel Meals</Button>
                <Modal title={
        <h2>Edit your Meals { details.key}</h2>
           }
            open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={()=>handleCancel(details)}
          >
         <div>
              <div className={Styles.date_container}>
                  <p>Select a date</p>
            <DatePicker onChange={(value: any) => setUpdatedData({ ...updatedData, date: dayjs(value).format('YYYY-MM-DD') })}
              defaultValue={dayjs(updatedData.date)}
              allowClear={false}
              value={dayjs(updatedData.date)}
                   disabledDate={(current) => {
            return dayjs().add(-1, 'days')  >= current ||
                  dayjs().add(1, 'month')  <= current;
            }}
            />
              </div>
               <div className={Styles.lunch_container}>
              <div className={Styles.lunch}>
                <p>Lunch</p>
                 <InputNumber min={0} max={5} defaultValue={updatedData.lunch} onChange={(value:any)=>setUpdatedData({...updatedData,lunch:value})} value={updatedData.lunch}/>
              </div>
             <div className={Styles.lunch}>
                <p>Dinner</p>
                <InputNumber min={0} max={5} defaultValue={updatedData.dinner} onChange={(value:any)=>setUpdatedData({...updatedData,dinner:value})} value={updatedData.dinner}/>
              </div>
              <div className={Styles.lunch}>
                <p>Tiffin for Lunch</p>
                <InputNumber min={0} max={2} defaultValue={0} onChange={(value:any)=>console.log(value)} />
              </div>
              <div className={Styles.lunch}>
                <p>Tiffin for Dinner</p>
                <InputNumber min={0} max={2} defaultValue={0} onChange={(value:any)=>console.log(value)} />
              </div>
              </div>
        </div>
      </Modal>
    </div>
  )
}

export default EditMeals