import React from 'react';
import Ability from './Ability'

const AbilityBox = (props) => {

    const renderedList = props.Abilities.map((ability, index) => {
        return<Ability key={index} stars={ability.stars} ability={ability.ability}/>;
    });

return (<div className="ability-box">{renderedList}</div>);
}

export default AbilityBox;