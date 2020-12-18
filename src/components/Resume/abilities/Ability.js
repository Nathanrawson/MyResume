import React from 'react';
import './AbilitiesCss.css';


const Ability = (props) => {

    const abilityRating = [...Array(5)].map((elementInArray, index) => {
        if(index < props.stars){
        return <i key={index} class="fa fa-star"  aria-hidden="true"></i>;
        }else{
            return <i key={index} style={{color:'grey'}} class="fa fa-star" aria-hidden="true"></i>;
        }
    }) 
    return (
   
           <div id={props.ability.replace(/[^A-Z0-9]/ig, "_")} className="ability-div">
  <div className="ability"><p>{props.ability}</p></div><div className="rating">{abilityRating}</div>
    </div>
    
    );
}

export default Ability;