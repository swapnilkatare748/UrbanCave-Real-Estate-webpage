import React from 'react'
import style from './Services.module.css';
import pig from '../../../assets/Services  img/pig.png';
import wallet from '../../../assets/Services  img/wallet.svg';
import page from '../../../assets/Services  img/page.svg';
import Loock from '../../../assets/Services  img/loock.svg';


function Services() {
  return (
    <div className={style.Services}>
       <h1>The smartest way to buy a home</h1>
       <div className={style.container}>
       <div className={style.info_Services}>
             <img src={pig} alt="Pig" />
             <h2>No Downpayment</h2>
             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
       <div className={style.info_Services}>
            <img src={wallet} alt="Pig" />
            <h2>All Cash Offer</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div> 
       <div className={style.info_Services}>
        <img src={page} alt="page" />
        <h2>Experts in Your Corner</h2>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
       <div className={style.info_Services}>
          <img src={Loock} alt="lock" />
          <h2>Lokced in Pricing</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
       </div>
    </div>
  )
}

export default Services
