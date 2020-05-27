import React from 'react';
import './App.css';
import { ReactComponent as Header } from  './images/bg-header-desktop.svg'
import CardContainer from './cardContainer'
let data = require('./data.json');
function App() {
  return (
    <div className ='App'>
    <header>
<Header className = 'header'/>
      </header>
      <div className ="CardWrapper">
      <CardContainer data ={data}/>
      </div>
      </div>
  );
}


export default App;
