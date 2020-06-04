import React, { useState } from 'react';
import './App.css';
import { ReactComponent as Header } from  './images/bg-header-desktop.svg'
import CardContainer from './cardContainer'

let data = require('./data.json');


function App() {
  const [jobsToRender, setJobsToRender]=useState(data)
  const [filterCriteria, setFilterCriteria]=useState([])

const handleFilterButton=(event)=>{

  setFilterCriteria(filterCriteria.push(event.target.value))
//  let filtredData= data.filter(empl=>(empl.role.includes(filterCriteria)))
let filtredData= data
 setJobsToRender(filtredData)
 console.log((filterCriteria))
}
  return (
    <div className ='App'>
    <header>
<Header className = 'header'/>
      </header>
      <div className ="CardWrapper">
      <CardContainer handleFilterButton={handleFilterButton} data ={jobsToRender}/>
      </div>
      </div>
  );
}


export default App;
