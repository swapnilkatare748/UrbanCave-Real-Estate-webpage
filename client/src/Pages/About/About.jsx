import React from 'react'
import style from './About.module.css';
import Hero from './Hero/Hero';
import Discription from './Discription/Discription';
import Customers from './Customers/Customers';


function About() {
  return (
    <div className={style.About}>
      <Hero/>
      <Discription/>
      <div className={style.info_about}>
           <div>
              <h1>+303</h1>
              <p>Area Population</p>
           </div>
           <div>
           <h1>+190</h1>
           <p>Total Propertis</p> 
           </div>
           <div>
           <h1>+202</h1>
           <p>Average House</p>
           </div>
           <div>
           <h1>+67</h1>
           <p>Total Branches</p>
           </div>
      </div>

      <Customers/>
    </div>
  )
}

export default About
