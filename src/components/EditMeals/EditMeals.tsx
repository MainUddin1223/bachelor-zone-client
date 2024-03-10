'use client'
import Styles from './EditMeals.module.css'
import { Button, DatePicker, DatePickerProps, Drawer, InputNumber, Modal } from "antd"
import dayjs from "dayjs"
import { useState } from "react";


const EditMeals = ({ details }: { details:any ,}) => {
  const [open,setOpen] = useState(false)
  const dummyData = {
    key: 1,
    dae: dayjs(Date.now()).format('YYYY-MM-DD'),
    lunch: 0,
    dinner: 0,
    tiffin: 0,
    order_date:dayjs(Date.now()).format('YYYY-MM-DD')
  }
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    ...dummyData
  })
  const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleUpdateMeal = (details: any) => {
    console.log(details)
  }

  const handleCancel = (details:any) => {
    console.log('Clicked cancel button',details);
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()).format('YYYY-MM-DD'));
         const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  setSelectedDate(dateString);
  };

 const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Edit Meals</Button>
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
              <DatePicker onChange={onChange} defaultValue={dayjs(selectedDate)}/>
              </div>
               <div className={Styles.lunch_container}>
              <div className={Styles.lunch}>
                <p>Lunch</p>
                 <InputNumber min={0} max={5} defaultValue={updatedData.lunch} onChange={(value:any)=>console.log(value)} />
              </div>
             <div className={Styles.lunch}>
                <p>Dinner</p>
                <InputNumber min={0} max={5} defaultValue={updatedData.dinner} onChange={(value:any)=>console.log(value)} />
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