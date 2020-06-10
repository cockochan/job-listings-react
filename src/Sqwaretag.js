import React from "react";

const Sqwaretag = (props) => {
  return (
    <div className="SqwaretagContainer col-4" key="props.unemployed.id">
      <button
        className="Sqwaretag"
        onClick={props.handleFilterButtonRole}
        value={props.unemployed.role}
      >
        {props.unemployed.role}{" "}
      </button>
      {props.unemployed.languages.map((language) => {
        return (
          <button
            className="Sqwaretag"
            key={props.unemployed.id}
            onClick={props.handleFilterButtonLang}
            value={language}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
};

export default Sqwaretag;
