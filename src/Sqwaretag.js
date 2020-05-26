import React from 'react'

const Sqwaretag = (props)=>{

    return(
        <div className ="SqwaretagContainer row">
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