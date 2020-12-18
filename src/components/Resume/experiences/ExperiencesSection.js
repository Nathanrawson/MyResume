import React from 'react';

const ExperiencesSection = (props) => {
return (<div> <div class="education-section">
<div class="education-name"><h3>{props.place}</h3><p>{props.date}</p></div>
<div class="education-qualififcation"><h3>{props.qualififcation}</h3><p>{props.content}</p></div>
</div></div>)
}

export default ExperiencesSection;