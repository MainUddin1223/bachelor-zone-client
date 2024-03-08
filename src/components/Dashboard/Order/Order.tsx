'use client'
import { Button, DatePicker, DatePickerProps, InputNumber } from 'antd'
import Styles from './Order.module.css'

const Order = () => {
      const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(dateString);
};
  return (
      <div>
          <h3>Order your meals</h3>
             <div>
              <DatePicker onChange={onChange} />
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
              <Button type='primary'>Order Meal</Button>
        </div>
    </div>
  )
}

export default Order