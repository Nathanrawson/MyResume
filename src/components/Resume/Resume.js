import React from 'react';
import './resumeCss.css';
import { Link } from 'react-router-dom';
import Header from '../Header';
const Resume = () => {

    return (
        
        <div id="Resume"> 
        
       <div id="landing-header">
      
       <Header  navColor="dark" navId="Dark" />
           <div id="profilePicDiv"><Link to="/Resume"><div id="profilePic"></div></Link><h1>Nathan Rawson</h1>
           <div><a className="natBut btn btn-dark" href="https://onedrive.live.com/download?cid=53E6190C0C16576B&resid=53E6190C0C16576B%213206&authkey=AInFSTroIMsKQvE&em=2">Resume (PDF)</a>
       <a className="natBut btn btn-dark" href="https://onedrive.live.com/download?cid=53E6190C0C16576B&resid=53E6190C0C16576B%213057&authkey=AEYsc4lfjDvH_jQ&em=2">Resume (Word)</a>
       <div id="LinkedInDiv"> <a href="https://www.linkedin.com/in/nathan-rawson-b81726114" ><i id="linkedInIcon" className="fa fa-linkedin-square fa-2x" aria-hidden="true" ></i></a></div>
       </div>
        </div>
    </div>
    
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
       </div>
       
      
    )
}

export default Resume;