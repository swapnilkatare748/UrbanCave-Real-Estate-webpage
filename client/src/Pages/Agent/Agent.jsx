import React from 'react'
import style from './Agent.module.css';
import Hero from './Hero/Hero';
import agent1 from '../../assets/Agents img/agent1.webp';
import agent2 from '../../assets/Agents img/agent2.webp';
import agent3 from '../../assets/Agents img/agent3.webp';
import agent4 from '../../assets/Agents img/Agent4.webp';

function Agent() {
  return (
    <div>
      <Hero/> <br />

      <div className={style.Agents}>
          <div>
            <img src={agent1} alt="1" />
            <div className={style.img_info}> 
              <h3>Swapnil Katare</h3>
                <p>listing - 10 Properties</p>
            </div>
          </div>
          <div>
            <img src={agent2} alt="2" />
            <div className={style.img_info}> 
              <h3>Sager sheti</h3>
              <p>listing - 50 Properties</p>
            </div>
          </div>
          <div>
            <img src={agent3} alt="3" />
            <div className={style.img_info}> 
              <h3>Gudiya kumar</h3>
              <p>listing - 30 Properties</p>
            </div>
          </div>
          <div>
            <img src={agent4} alt="4" />
            <div className={style.img_info}> 
              <h3>Permeshor jadhav</h3>
              <p>listing - 100 Properties</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Agent
