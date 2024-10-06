import React from 'react'
import style from './Footer.module.css';


function Footer() {
  return (
    <div className={style.footer}>
       <div className={style.Container}>
        
            <div className={style.Continer_last}>
            <p> @UrbanCaves : 2022 </p> 
            <p><i class="fa-regular fa-envelope"></i> Email: UrbanCaves7777@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> +1800 00 0009</p>
            <p><i class="fa-solid fa-location-dot"></i> Pimpri Pune 431125 </p>
            </div>
            <div className={style.icons}>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            </div>
           
       </div>
    </div>
  )
}

export default Footer
