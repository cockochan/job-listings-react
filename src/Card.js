import React from 'react';
import Sqwaretag from './Sqwaretag'
const Card =(props)=>{
    let source = props.unemployed.logo;
return(
    <div key = {props.unemployed.id} className='Card row'>
        <img src ={source} className = "logo" ></img>
        <div className="aboutBlock col-3">
            <div className='labels'>
            </div>
            <p className ='position'>
                {props.unemployed.position}
            </p>
            </div>
            <span className = 'descriptiveTags row'>
                <p className = 'contract col-1'> {props.unemployed.contract}</p>
                <p className = 'posted col-1'> {props.unemployed.postedAt}</p>
                <p className = 'location col-1'> {props.unemployed.location}</p>
            </span>
        
                <Sqwaretag unemployed={props.unemployed}></Sqwaretag>
        
        
    
    
    </div>
)
}
export default Card