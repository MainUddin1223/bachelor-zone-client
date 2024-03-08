import Order from '../Order/Order';
import Styles from './Statics.module.css';

const Statics = () => {
  return (
      <div>
          <div>
              <h4>Total expenses for this month</h4>
              <h4>Dew Container</h4>
              <h4>Dew Tiffin carrier</h4>
      </div>
      <div>
        <Order/>
      </div>
    </div>
  )
}

export default Statics