import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className= {style.navbar}>
        <div className={style.logo}>
           <Link to='/'> <h2>UrbanCave</h2></Link>
        </div>
        <div className={style.navitems}>
           <ul>
            <li><Link  to="/"> Home </Link></li>
            <li><Link  to="/About"> About </Link></li>
            <li><Link  to="/Agent"> Agent  </Link></li>
            <li><Link  to="/Properties"> Propertis </Link></li>
            <li><Link  to="/Services"> Services </Link></li>
            <li><Link  to="/Contact"> Contact </Link></li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar;
