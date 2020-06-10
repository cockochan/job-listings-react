import React from 'react';
import Card from './Card.js';


const CardContainer =(props)=> {

    return (
    props.data.map(unemployed=>{
        return(
         <div className='filterandcard'  key ={unemployed.id}>
             <div className='filter'></div>
            <Card handleFilterButtonRole={props.handleFilterButtonRole} handleFilterButtonLang={props.handleFilterButtonLang}  unemployed={unemployed} key ={unemployed.id} />
            </div>
        )
    }

    ))}
    


export default CardContainer