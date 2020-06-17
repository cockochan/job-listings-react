import React, { useState } from "react";
import "./App.css";
import { ReactComponent as Header } from "./images/bg-header-desktop.svg";
import CardContainer from "./cardContainer";

let data = require("./data.json");

function App() {
  const [jobsToRender, setJobsToRender] = useState(data);
  const [filLanguages, setFilLanguages] = useState( [] );
  const [filRole, setFilRole]=useState( [] )
  const [filtredData, setFiltredData]=useState( [] )



  const handleFilterButtonLang = (event) => {
    setFilLanguages(filLanguages.concat(event.target.value));

    // let filtredData = data.filter((empl) => {
    //   return empl.languages.includes(filterCriteria.languages);
    // });
    // setJobsToRender(filtredData);
    // // }
    
  };

  const handleFilterButtonRole = (event) => {
    setFilRole(filRole.concat(event.target.value));
    let tempFiltredData=[];
    console.log(filRole)
    // for(let i=0;i===filRole.length;i++){
    // tempFiltredData = data.filter(
    //   (empl) => empl.role === filRole[i])
      console.log(filRole)
//       setFiltredData (filtredData.concat(tempFiltredData))
      
// }
// setJobsToRender(filtredData);
  };
 
  return (
    <div className="App">
      <Header className="header" />

      <div className="filterButtons">
      {!filRole? 'No filters' : filRole.map((role) => {
          return <button className="Sqwaretag">{role}</button>
        })}
       
        {!filLanguages? 'No filters' : filLanguages.map((lang) => {
          return <button className="Sqwaretag">{lang}</button>
        })}
      </div>

      <div className="CardWrapper">
        <CardContainer
          handleFilterButtonRole={handleFilterButtonRole}
          handleFilterButtonLang={handleFilterButtonLang}
          data={jobsToRender}
        />
      </div>
    </div>
  );
}

export default App;
