import React from 'react';
import Card from './Card.js';


const CardContainer =(props)=> {

    return (
    props.data.map(unemployed=>{
        return(
         
            <Card handleFilterButton={props.handleFilterButton} unemployed={unemployed} key ={unemployed.id} />
            
        )
    }

    ))}
    


export default CardContainer