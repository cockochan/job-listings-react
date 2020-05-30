import React from 'react'

const Sqwaretag = (props)=>{

    return(
        <div className ="SqwaretagContainer col-4">
    {props.unemployed.languages.map(language=>{
        return(
            <div className="Sqwaretag" key={props.unemployed.id}>
                {language}
            </div>   
    )},
     
  
    )}
    <div className="Sqwaretag">{props.unemployed.level}</div>
    <div className="Sqwaretag">{props.unemployed.role}</div>
    </div>
    )}
    


export default Sqwaretag