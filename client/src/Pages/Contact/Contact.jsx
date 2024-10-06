import React from 'react'
import style from './Contact.module.css';
import Hero from './Hero/Hero';

function Contact() {
  return (
    <div>
      <Hero/>
      <div className={style.form}>
         <h1>Connect us +</h1>
         <input type="text" placeholder='Email' />
          <input type="text" placeholder='Enter The Name' />
        
          <textarea name="" placeholder='Massage ' ></textarea>
          <input className={style.button} type="submit" value="submit" />
      </div>
    </div>
  )
}

export default Contact
