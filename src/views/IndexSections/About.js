import React from 'react';
import img from '../../assets/img/PostelonAi.png'

const About = () => {
 return (
  <div id='abt' className='aboutUs'>

   <h6><span>About us</span></h6>
   <h2>Powering the RobotBulls Platform</h2>
   <h3>Voting on the RobotBulls Platform</h3>
   <h4>Coin for the Bull Market</h4>

   <p className="aboutText">
    BullCoin is an innovative crypto token specifically designed to fuel the mechanisms of the RobotBulls platform. It's not just a currency, but a core ingredient that ensures the smooth running of our advanced trading system
   </p>

   <img src={img} alt="" />
   <p className="aboutText">
    BullCoin holders have the unique privilege of participating in the voting system, which directly influences the operations of the RobotBulls trading robots
   </p>

  </div>
 );
};

export default About;