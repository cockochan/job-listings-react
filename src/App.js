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
  console.log(data);
  const handleFilterButtonLang = (event) => {
    if (filterCriteria.languages.length === 0) {
      return null;
    } else {
      setFilterCriteria(filterCriteria.languages.push(event.target.value));
      console.log(filterCriteria);
      let filtredData = data.filter((empl) =>
        empl.language.includes(filterCriteria)
      );
      setJobsToRender(filtredData);
    }
  };

  const handleFilterButtonRole = (event) => {
    if (filterCriteria.languages.length === 0) {
      return null;
    } else {
      setFilterCriteria(filterCriteria.role.push(event.target.value));
      let filtredData = data.filter((empl) =>
        empl.role.includes(filterCriteria.role)
      );
      setJobsToRender(filtredData);
      console.log(filterCriteria);
    }
  };
  return (
    <div className="App">
      <Header className="header" />

      <div className="filterButtons">
        {filterCriteria.role.map((buttn) => {
          return (
            <button
              className="Sqwaretag"
              key="123"
              handleFilterButtonRole={handleFilterButtonRole}
              handleFilterButtonLang={handleFilterButtonLang}
            >
              buttn
            </button>
          );
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
