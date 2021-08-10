import React from 'react';
import Card from './components/card.js';

const heading = "Todo Website";

function App(){
   return <div>
       <h1 className="headingStyle">{heading}</h1>,
       <Card titleTaxt="call Mother" descrip="this is description text" />
       <Card  titleTaxt="call Father" descrip="this is Massage for nothing" />
       <Card  titleTaxt="call Papo" descrip="this is a papo call" />
   </div>
}

export default App;