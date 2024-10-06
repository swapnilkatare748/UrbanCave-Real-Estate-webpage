import React from 'react'
import Hero from './Hero/Hero';
import style from './Properties.module.css';
import Offers from './Offers/Offers';

function Properties() {
  return (
    <div>
       <Hero/>
       <br />
       <Offers/>
       <br/>
       <div className={style.spans}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>..</span>
       </div>
    </div>
  )
}

export default Properties
