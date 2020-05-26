import React from 'react';
import Card from'./Card.js/';

let data = require('./data.json');

const CardContainer =()=> {

    return (
    data.map(unemployed=>{
        return(
            <Card unemployed={unemployed}/>
        )
    }

    ))}
    


export default CardContainer