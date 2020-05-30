import React from 'react';
import Sqwaretag from './Sqwaretag'
const Card = (props) => {
    let source = props.unemployed.logo;
    console.log(source)
    return (
        <div key={props.unemployed.id} className='Card row'>

            <img src={source} className="logo col-4" alt='nothing to see here anyway' ></img>

            <div className="aboutBlock col-5">
                <div className='tagsNew'>
                    <span className='companyName'>
                        <div >
                        </div>
                        <div>
                            {(props.unemployed.new) ? (<div className='Sqwaretag'>new </div>) : null}
                        </div>
                        <div>
                            <div className='Sqwaretag'>{props.unemployed.role} </div>
                        </div>
                        {props.unemployed.company}
                    </span>
                </div>
                <div className='labels'>
                </div>
                <p className='position'>
                    {props.unemployed.position}
                </p>

                <p className='descriptiveTags row'>
                    <span className='contract  nowrap'> {props.unemployed.contract}&#9679;</span>
                    <span className='posted nowrap'> {props.unemployed.postedAt}&#9679;	</span>
                    <span className='location  nowrap'> {props.unemployed.location}</span>
                </p>
            </div>
            <div className='tagContainer col-4'>
                <Sqwaretag unemployed={props.unemployed}></Sqwaretag>
            </div>




        </div>
    )
}
export default Card