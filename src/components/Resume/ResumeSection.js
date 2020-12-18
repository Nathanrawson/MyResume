import React from 'react'

const ResumeSection = (props) => {
  
    return (
    <div style={{backgroundColor: props.color}}  id={props.id}><div className="ui container">{props.children}</div></div>
    )
}

export default ResumeSection;