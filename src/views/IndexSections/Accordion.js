import React, { useState } from 'react';


const Accordion = () => {
 const [activeIndex, setActiveIndex] = useState(null);

 const toggleAccordion = (index) => {
  setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
 };

 return (
  <div className='faq'>
   <h1>Have a Question?</h1>
   <div className="accordion">

    <div className="accordion-item">
     <div className={`accordion-title ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
      Where can I buy the token?
     </div>
     <div className={`accordion-content ${activeIndex === 0 ? 'active' : ''}`}>
      The token is available on all major DEXs, uniswap, sushiswap and pancakeswap
     </div>
    </div>
    <div className="accordion-item">
     <div className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
      Question 2
     </div>
     <div className={`accordion-content ${activeIndex === 1 ? 'active' : ''}`}>
      Answer to question 2 goes here.
     </div>
    </div>
    <div className="accordion-item">
     <div className={`accordion-title ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
      Question 3
     </div>
     <div className={`accordion-content ${activeIndex === 2 ? 'active' : ''}`}>
      Answer to question 3 goes here.
     </div>
    </div>
   </div>
  </div>
 );
};

export default Accordion;
