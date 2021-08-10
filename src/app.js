import React from 'react';
import Card from './components/card.js';

const heading = "Todo Website";

function App(){
   return <div>
       <h1 className="headingStyle">{heading}</h1>,
       <Card />
       <Card />
       <Card />
   </div>
}

export default App;