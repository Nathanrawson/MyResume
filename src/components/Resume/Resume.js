import React, { useState } from 'react';
import './resumeCss.css';
import Link from '../Link';
import Header from '../Header';


const Resume = () => {

    const [screenSize] = useState(window.screen.width)
    console.log(screenSize)

    return <div id="mobilePage">
        <Header navColor="dark" navId="Dark" />
        <div id="mobileResumeBoxDiv">
            <div id="mobileResumeBox">
                <h1 id="resumeMobileTitle">Nathan Rawson</h1>
                <div><div id="resumeButtonDiv"><a className="natBut btn btn-dark" href="https://onedrive.live.com/download?cid=53E6190C0C16576B&resid=53E6190C0C16576B%213206&authkey=AInFSTroIMsKQvE&em=2">Resume (PDF)</a>
                    <a className="natBut btn btn-dark" href="https://onedrive.live.com/download?cid=53E6190C0C16576B&resid=53E6190C0C16576B%213057&authkey=AEYsc4lfjDvH_jQ&em=2">Resume (Word)</a></div>
                    <div id="LinkedInDivMobile"> <Link href="https://www.linkedin.com/in/nathan-rawson-b81726114"><i id="linkedInIcon" className="fa fa-linkedin-square fa-2x" aria-hidden="true" ></i></Link></div>
                </div>
            </div>
        </div>
    </div>
}



export default Resume;