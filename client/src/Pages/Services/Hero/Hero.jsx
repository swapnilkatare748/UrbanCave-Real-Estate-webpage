import React from 'react'
import style from './Hero.module.css';

function Hero() {
  return (
    <div className={style.hero}>
      <h1> Find Your Dream Home </h1>
      <h5> HOME <i class="fa-solid fa-angle-right"></i> <b>SERVICES</b> </h5>
      <div className={style.downAero}> <i class="fa-solid fa-arrow-down-long"></i> </div>

    </div>
  )
}

export default Hero
