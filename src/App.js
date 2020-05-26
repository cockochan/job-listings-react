import React from 'react';
import './App.css';
import { ReactComponent as Header } from  './images/bg-header-desktop.svg'
import CardContainer from './cardContainer'
function App() {
  return (
    <div className ='App'>
    <header>
<Header className = 'header col-4'/>
      </header>
      <CardContainer />
      </div>
  );
}


export default App;
