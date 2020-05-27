import React from 'react';
import Sqwaretag from './Sqwaretag'
const Card =(props)=>{
    let source = props.unemployed.logo;
    console.log(source)
return(
    <div key = {props.unemployed.id} className='Card row'>

        <img src ={source} className = "logo col-4" alt ='nothing to see here anyway' ></img>
        
        <div className="aboutBlock col-4">
            <div className='labels'>
            </div>
            <p className ='position'>
                {props.unemployed.position}
            </p>
            
            <span className = 'descriptiveTags row'>
                <p className = 'contract col-1'> {props.unemployed.contract}</p>
                <p className = 'posted col-1'> {props.unemployed.postedAt}</p>
                <p className = 'location col-1'> {props.unemployed.location}</p>
            </span>
            </div>
            <div className ='tagContainer col-4'>
                <Sqwaretag unemployed={props.unemployed}></Sqwaretag>
                </div>
        
        
    
    
    </div>
)
}
export default Card