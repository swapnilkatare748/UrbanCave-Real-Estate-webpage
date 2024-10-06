import React from "react";
import style from './Home.module.css';
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Offers from "./Offers/Offers";
import Discription from "./Discription/Discription";
import Customers from "../About/Customers/Customers";

const Home=()=>{
    return(
      <div className={style.home}>
          <Hero/> <br/> <br />
          <h3> ------- Our Services --------</h3>
          <Services/>
          <h3> ------- What we offers --------</h3>
          <Offers/> 
          <Customers/>    
          <h3>-------------------------------</h3>
          <Discription/>      

      </div>
    )
}

export default Home;