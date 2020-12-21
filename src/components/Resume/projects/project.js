import React from 'react';
import './projectsCss.css';

const project = ({title, image, content, href}) =>{
return <div className="project-body"><div className="project"><h1 className="project-title">{title}</h1>
<div  style={{backgroundImage:image, backgroundSize:'cover', borderStyle:'solid', borderRadius: '25px'}} className="project-box">
    <div class="overlay">
<div className="text"><a className="btn btn-primary" href={href}>Click Here!</a></div>
</div></div>
    <div className="project-content"><p className="projct-content-text">{content}</p></div>
     </div>
    </div>
}

export default project; 