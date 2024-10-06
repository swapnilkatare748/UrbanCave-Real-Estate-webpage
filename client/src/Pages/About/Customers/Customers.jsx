import React from 'react'
import style from './Customers.module.css';
import user1 from '../../../assets/users/user1.jpeg';
import user2 from '../../../assets/users/user2.jpeg';
import user5 from '../../../assets/users/user5.jpeg';



function Customers() {
  return (
    <>
    <h3 className={style.h3_Costomers}> ------------- HAPPY USERS -----------</h3>
    <div className={style.customers}>
      <div className={style.customers_child}>
            <div className={style.photo}>
              <img src={user1} alt="user1" />
            </div>      
            <h3> <b>Ankita jadhav</b></h3>
      </div>
      <div className={style.customers_child}>
            <div className={style.photo}>
              <img src={user2} alt="user2" />
            </div>      
            <h3> <b>ChandraMukhi</b></h3>
      </div>
      <div className={style.customers_child}>
            <div className={style.photo}>
              <img src={user1} alt="user1" />
            </div>      
            <h3> <b>Gudiya jadhav</b></h3>
      </div>
      <div className={style.customers_child}>
            <div className={style.photo}>
              <img src={user5} alt="user1" />
            </div>      
            <h3> <b>Gudiya jadhav</b></h3>
      </div>
    </div>
    </>
  )
}

export default Customers
