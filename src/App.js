import React, { useState } from "react";
import "./App.css";
import { ReactComponent as Header } from "./images/bg-header-desktop.svg";
import CardContainer from "./cardContainer";

let data = require("./data.json");

function App() {
  const [jobsToRender, setJobsToRender] = useState(data);
  const [filterCriteria, setFilterCriteria] = useState({
    languages: [],
    role: [],
  });
  const [RolebuttonName, setRoleButtonName] = useState(null);

  const handleFilterButtonLang = (event) => {
    // setFilterCriteria(filterCriteria.languages.push(event.target.value));

    // let filtredData = data.filter((empl) => {
    //   return empl.languages.includes(filterCriteria.languages);
    // });
    // setJobsToRender(filtredData);
    // // }
    console.log(filterCriteria);
  };

  const handleFilterButtonRole = (event) => {
    setFilterCriteria(filterCriteria.role.push(event.target.value));
    console.log(filterCriteria);
    let filtredData = data.filter(
      (empl) => empl.role === filterCriteria.role[0]
    );
    setRoleButtonName(event.target.value);
    setJobsToRender(filtredData);
  };

  return (
    <div className="App">
      <Header className="header" />

      <div className="filterButtons">
        <button className="Sqwaretag">{RolebuttonName}</button>
        {/* {filterCriteria.languages.map((lang) => {
          return <button className="Sqwaretag">{lang}</button>;
        })} */}
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
