import React from 'react'

const Sqwaretag = (props)=>{

    return(
        <div className ="SqwaretagContainer col-4">
              <div className='Sqwaretag2'>{props.unemployed.role} </div>
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