import React from 'react'
import style from './Hero.module.css';

function Hero() {
  return (
    <div className={style.hero}>
      <h1>The Simplest Way to Find the property </h1>
      <h5>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h5> <h5> It is a paradisematic country, in which roasted parts</h5>
      <div className={style.input_box}>
        <input type="text" placeholder='Search location' />
        <div className={style.icon}>
        <i className="fa-solid fa-magnifying-glass" style={{color:' rgb(136, 128, 128)'}}></i>
        </div>

      </div>
       <div className={style.downAero}> <i class="fa-solid fa-arrow-down-long"></i> </div>
    </div>
  )
}

export default Hero
