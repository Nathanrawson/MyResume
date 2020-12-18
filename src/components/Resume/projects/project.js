import React from 'react';
import './projectsCss.css';
import Link from '../../Link';

const project = (props) =>{
return <div className="project-body"><div className="project"><h1 className="project-title">{props.title}</h1><div className="project-image" style={{backgroundImage:props.image, backgroundSize:'cover', borderStyle:'solid', borderRadius: '25px'}} className="project-box"><div class="overlay">
<div class="text"><a className="btn btn-primary" href={props.href}>Click Here !</a></div>
</div></div>
    <div className="project-content"><p className="projct-content-text">{props.content}</p></div>
     </div>
    </div>
}

export default project; 