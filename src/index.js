import React from 'react';
import ReactDOM from 'react-dom';

const heading = "Todo Website";
const cardHeading = "Call my family";
const cardTaxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione nemo expedita assumenda accusantium nostrum sunt ad earum sit doloremque.";
const date = new Date();
const todayDate = date.getUTCDate();
const currentMonth = date.getUTCMonth();
const currentYear = date.getUTCFullYear();


ReactDOM.render(
   <div>
     <h1 style={{color:'white',backgroundColor:'purple'}}>{heading}</h1>
     <div>
       <h3>{cardHeading}</h3>
       <p>{cardTaxt}</p>
       <p>{todayDate + "/" + currentMonth + "/" + currentYear}</p>
     </div>
   </div>,
  
   document.getElementById('root'),
);
