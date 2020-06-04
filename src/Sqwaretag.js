import React from 'react'

const Sqwaretag = (props)=>{

    return(
        <div className ="SqwaretagContainer col-4" key ='props.unemployed.id'>
              <button className='Sqwaretag' value ={props.unemployed.role} onClick={props.handleFilterButton} key ='props.unemployed.id'>{props.unemployed.role} </button>
    {props.unemployed.languages.map(language=>{
        return(
            <button className="Sqwaretag" value ={props.unemployed.id} key ='props.unemployed.id' onClick={props.handleFilterButton}>
                {language}
            </button>   
    )}
  
    )}
    </div>
    )}
    


export default Sqwaretag