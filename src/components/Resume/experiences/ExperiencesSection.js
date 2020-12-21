import React from 'react';

const ExperiencesSection = (props) => {
return (<div> <div className="education-section">
<div className="education-name"><h3>{props.place}</h3><p>{props.date}</p></div>
<div className="education-qualififcation"><h3>{props.qualififcation}</h3><p>{props.content}</p></div>
</div></div>)
}

export default ExperiencesSection;