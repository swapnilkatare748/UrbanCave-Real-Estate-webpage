import React from 'react'
import style from './Hero.module.css';

function Hero() {

const Search=()=>{
     
}

  return (
    <div className={style.hero}>
      <h1>Choose Your Desired Home </h1>
      <div className={style.input_box}>
        <input type="text" placeholder='Search location' />
        <div className={style.icon}>
        <i className="fa-solid fa-magnifying-glass" style={{color:' rgb(136, 128, 128)'}}></i>
        </div>

      </div> <br />
      <h5> HOME <i class="fa-solid fa-angle-right"></i> <b>PROPERTIES</b> </h5>

      <div className={style.downAero}> <i class="fa-solid fa-arrow-down-long"></i> </div>
    </div>
  )
}

export default Hero
