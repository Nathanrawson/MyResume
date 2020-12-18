import React, { useState, useEffect} from 'react';
import Link from '../Link'
import Profile from './profile/Profile'
import './resumeCss.css'
import Section from './ResumeSection';
import Navbar from '../Navbar'
import Header from '../Header';
import Experiences from './experiences/Experiences'
import Projects from './projects/Projects'
import Abilities from './abilities/Abilities'
import ContactForm from './contactForm/ContactForm'
import './ResumeContentMobileCss.css'

const ResumeContent = () => {
    const [screenSize] = useState(window.screen.width);
    const [navClass, setNavClass] = useState("");
    


    const nav = () => {
        return  <Header navClass={navClass} navColor="dark" navId="Dark" />;
    }
    window.onscroll = function() {myFunction()};
  
function myFunction() {
   console.log(window.pageYOffset)
   //Add forloop array here
   var sections = ['Profile','Experiences', 'Abilities','Projects', 'Contact']
   for(var i = 0; i < sections.length; i++){
       if(i == 4 && window.pageYOffset > document.getElementById(sections[i]).offsetTop - 200){
        document.getElementById(sections[i]+'Button').style.backgroundColor = '#aac5e2'
       }
    else if(window.pageYOffset > document.getElementById(sections[i]).offsetTop -200 && window.pageYOffset <  document.getElementById(sections[i+1]).offsetTop - 200){
        document.getElementById(sections[i]+'Button').style.backgroundColor = '#aac5e2'
    }else{
        document.getElementById(sections[i]+'Button').style.backgroundColor = 'black'
    }
   }
  
    if(window.pageYOffset > document.querySelector("#ResumeContent > div:nth-child(1)").offsetHeight - 50)
    {
        setNavClass("sticky")
    }else{
        setNavClass("nonSticky")
    }   
    
}

    return (
        
        <div style={{height: "100%"}} id="ResumeContent" >
            
         <div  style={{height: "100%",backgroundSize:"cover",backgroundRepeat: "no-repeat", backgroundImage: "url(https://res.cloudinary.com/dng8alzfo/image/upload/v1606858945/Resume/john-fowler-d2YMQ-hZ3og-unsplash_1.jpg)"}}>
         <div id="landing-header">
         <div onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} ><div id="profilePic"></div></div>
      <h1 className="hoverItem" onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} style={{ color:"white", textDecoration: "underline", textUnderlineOffset:"3px"}}>Nathan Rawson</h1>
      <h3 style={{color:"white"}}>Software Developer</h3>
      <div><div id="resumeButtonDiv"><a className="natBut btn btn-dark" href="https://onedrive.live.com/download?cid=53E6190C0C16576B&resid=53E6190C0C16576B%213206&authkey=AInFSTroIMsKQvE&em=2">Resume (PDF)</a>
       <a className="natBut btn btn-dark" href="https://onedrive.live.com/download?cid=53E6190C0C16576B&resid=53E6190C0C16576B%213057&authkey=AEYsc4lfjDvH_jQ&em=2">Resume (Word)</a></div>
       <div id="LinkedInDivMobile"> <a href="https://www.linkedin.com/in/nathan-rawson-b81726114"><i id="linkedInIcon" className="fa fa-linkedin-square fa-2x" aria-hidden="true" ></i></a></div>
       </div>
     
   </div>
   <div className="col-xs"  onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} id="GoToProfileButton"><i style={{animation:"updown 1.5s ease infinite", position:'relative' }} className="fa fa-chevron-down fa-2x"></i></div>
   </div>
         
            {nav()}
            <i id="rocket" class="fa fa-rocket fa-4x"></i>
            <div>
            <Section color="#B9B9B9" id="Profile">
               <Profile/>
                </Section>
                <Section color="#00AAA9" id="Experiences">
                <Experiences/>
                </Section>
            <Section color="#B9B9B9" id="Abilities">
            <Abilities/>
                </Section>

            <Section color="#00AAA9" id="Projects">
                <Projects/>
                </Section>
            <Section color="#B9B9B9" id="Contact">
                <ContactForm/>
            </Section>

            </div>
        </div>
    )
}

export default ResumeContent;