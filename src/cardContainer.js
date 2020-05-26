import React from 'react';
import Card from './Card.js';



const CardContainer =(props)=> {
console.log(props.data)
    return (
    props.data.map(unemployed=>{
        return(
            <Card unemployed={unemployed} key ={unemployed.id}/>
        )
    }

    ))}
    


export default CardContainer