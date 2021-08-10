import React from 'react';

const date = new Date();
const todayDate = date.getUTCDate();
const currentMonth = date.getUTCMonth();
const currentYear = date.getUTCFullYear();

function Card(props){
    const {titleTaxt,descrip} = props;
    return <div className="card">
              <h3>{props.titleTaxt}</h3>
              <p>{descrip}</p>
              <p>{todayDate + "/" + currentMonth + "/" + currentYear}</p>
          </div>
            
  }

  export default Card;