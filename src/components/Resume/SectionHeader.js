import React from 'react';

const SectionHeader = (props) => {
    return (<div><h1 style={{textAlign:'center', paddingTop: '60px', fontSize: '350%'}}>{props.h1}</h1>
    <h3 style={{textAlign:'center'}}>{props.h3}</h3><hr/></div>);
}

export default SectionHeader;