import React from 'react';
import style from './offers.module.css';
import { Link } from 'react-router-dom';
import home1 from '../../../assets/Offers img/home1.jpeg';
import home2 from '../../../assets/Offers img/home2.jpeg';
import home3 from '../../../assets/Offers img/home3.jpg';
import home4 from '../../../assets/Offers img/home4.jpeg';
import home5 from '../../../assets/Offers img/home5.jpg';
import home6 from '../../../assets/Offers img/home6.webp';



function Offers() {
  return (
  <>
   <h4 className={style.h1}>--------- Exclusive Offer For You ----------</h4>
  
  <div className={style.offers}>
     
       <div className={style.cards}>
        <img src={home1} alt="home 1" />
          <div className={style.offer_info}>
            <div className={style.offer_child}>
            <h4>$7708</h4>
            <p> 4BHK</p>
            <h2><b>The Blue Sky Home</b></h2>
            <p>Oakland</p>
            <div><i class="fa-solid fa-link"></i></div>
            </div>
          </div>
       </div>
       <div className={style.cards}>
        <img src={home2} alt="home 1" />
        <div className={style.offer_info}>
        <div className={style.offer_child}>
            <h4>$7708</h4>
            <p> 1BHK</p>
            <h2><b>The little Home</b></h2>
            <p>UK</p>
            <div><i class="fa-solid fa-link"></i></div>
            </div>
         </div>
       </div>
       <div className={style.cards}>
        <img src={home3} alt="home 1" />
        <div className={style.offer_info}>
        <div className={style.offer_child}>
            <h4>$79908</h4>
            <p> 5BHK</p>
            <h2><b>The White Sky Home</b></h2>
            <p>Mumbia</p>
            <div><i class="fa-solid fa-link"></i></div>
            </div>
        </div>
       </div>
       <div className={style.cards}>
        <img src={home4} alt="home 1" />
          <div className={style.offer_info}>
            <div className={style.offer_child}>
            <h4>$7708</h4>
            <p> 4BHK</p>
            <h2><b> The Home</b></h2>
            <p>Rajsthan</p>
            <div><i class="fa-solid fa-link"></i></div>
            </div>
          </div>
       </div>
       <div className={style.cards}>
        <img src={home5} alt="home 1" />
          <div className={style.offer_info}>
            <div className={style.offer_child}>
            <h4>$708</h4>
            <p> 4BHK</p>
            <h2><b> Wooden Home</b></h2>
            <p>Himalaya</p>
            <div><i class="fa-solid fa-link"></i></div>
            </div>
          </div>
       </div>
       <div className={style.cards}>
        <img src={home6} alt="home 1" />
          <div className={style.offer_info}>
            <div className={style.offer_child}>
            <h4>$770668</h4>
            <p> 8BHK</p>
            <h2><b>The Wite Sky Home</b></h2>
            <p>Oakland</p>
            <div><i class="fa-solid fa-link"></i></div>
            </div>
          </div>
       </div>
       
       
    </div>
    </>
  )
}

export default Offers
