import React from 'react';
import ReactDOM from 'react-dom';

const heading = "Todo Website";
const cardHeading = "Call my family";
const cardTaxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione nemo expedita assumenda accusantium nostrum sunt ad earum sit doloremque.";
const date = new Date();
const todayDate = date.getUTCDate();
const currentMonth = date.getUTCMonth();
const currentYear = date.getUTCFullYear();

function Card(){
  return <div className="card">
            <h3>{cardHeading}</h3>
            <p>{cardTaxt}</p>
            <p>{todayDate + "/" + currentMonth + "/" + currentYear}</p>
        </div>
          
}


ReactDOM.render(
   <div>
     <h1 className="headingStyle">{heading}</h1>
     <div className="container">
          <Card />
          <Card />
          <Card />
      </div>
   </div>,
  
   document.getElementById('root'),
);
