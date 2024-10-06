import React from 'react';
import style from './offers.module.css';
import { Link } from 'react-router-dom';
import home1 from '../../../assets/Offers img/home1.jpeg';
import home2 from '../../../assets/Offers img/home2.jpeg';
import home3 from '../../../assets/Offers img/home3.jpg';


function Offers() {
  return (
  <>
   <h1 className={style.h1}> Exclusive Offer For You </h1>
  
  <div className={style.offers}>
     
       <div className={style.cards}>
        <img src={home1} alt="home 1" />
          <div className={style.offer_info}>
            <div className={style.offer_child}>
                <h4>$7608</h4>
                <p> 1BHK</p>
                <h2><b>The white windo Home</b></h2>
                <p>UK</p>
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
       
    </div>
    <button className={style.button}> <Link to="/Properties"> More  <i class="fa-solid fa-hand-pointer"></i> </Link></button>
    </>
  )
}

export default Offers
