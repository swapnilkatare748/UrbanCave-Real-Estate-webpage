import React from 'react'
import style from './Hero.module.css';

function Hero() {
  return (
    <div className={style.hero}>
          <div className={style.content}>
            <div>
            <i class="fa-solid fa-address-card"></i>
             <h3>Addres : </h3>
             <p>pimpri Pune 412204 </p>
            </div>
            <div className={style.contact}><i class="fa-solid fa-phone"></i>
             <h3>Phone :</h3>
             <p>+91 1800 000 000</p>
            </div>
            <div>
            <i class="fa-regular fa-envelope"></i>
            <h3>Email :</h3>
            <p>UrbanCaves7777@gmail.com</p>
            </div>
          </div>
    </div>
  )
}

export default Hero
