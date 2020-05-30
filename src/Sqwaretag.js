import React from 'react'

const Sqwaretag = (props)=>{

    return(
        <div className ="SqwaretagContainer col-4">
    {props.unemployed.languages.map(language=>{
        return(
            <div className="Sqwaretag" key={props.unemployed.id}>
                {language}
            </div>   
    )}
  
    )}
    </div>
    )}
    


export default Sqwaretag