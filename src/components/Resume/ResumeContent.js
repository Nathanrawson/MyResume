import React, { useState } from 'react';
import Profile from './profile/Profile'
import './resumeCss.css'
import Section from './ResumeSection';
import Header from '../Header';
import Experiences from './experiences/Experiences'
import Projects from './projects/Projects'
import Abilities from './abilities/Abilities'
import ContactForm from './contactForm/ContactForm'
import './ResumeContentMobileCss.css'
import pigImage from './pigImage1.png'

const ResumeContent = () => {
    const [navClass, setNavClass] = useState("");
    const nav = () => {
        return <Header navClass={navClass} navColor="dark" navId="Dark" />;
    }
    window.onscroll = function () { myFunction() };

    function myFunction() {
        console.log(window.pageYOffset)
        //Add forloop array here
        var sections = ['Profile', 'Experiences', 'Abilities', 'Projects', 'Contact']
        for (var i = 0; i < sections.length; i++) {
            if (i === 4 && window.pageYOffset > document.getElementById(sections[i]).offsetTop - 200) {
                document.getElementById(sections[i] + 'Button').style.backgroundColor = '#aac5e2'
            }
            else if (window.pageYOffset > document.getElementById(sections[i]).offsetTop - 200 && window.pageYOffset < document.getElementById(sections[i + 1]).offsetTop - 200) {
                document.getElementById(sections[i] + 'Button').style.backgroundColor = '#aac5e2'
            } else {
                document.getElementById(sections[i] + 'Button').style.backgroundColor = 'black'
            }
        }

        if (window.pageYOffset > document.querySelector("#ResumeContent > div:nth-child(1)").offsetHeight - 50) {
            setNavClass("sticky")
        } else {
            setNavClass("nonSticky")
        }
    }
    return (
        <div style={{ height: "100%" }} id="ResumeContent" >

            <div style={{ height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat",backgroundImage: `url(${pigImage}`, backgroundColor: "#03010c" }}>
             
                <div id="landing-header">
                    <div onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} >                 
                    </div>
                    <div id="resumeButtons"><div id="resumeButtonsDiv">
                    <h1>Pig Cult </h1>
                       <a className="btn btn-primary" href='/videos'>Pig tube</a>
                    </div>                  
                    </div>
                </div>
                <div className="col-xs" onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} id="GoToProfileButton">
                    <i style={{ animation: "updown 1.5s ease infinite", position: 'relative' }} className="fa fa-chevron-down fa-2x"></i>
                </div>
            </div>

            {nav()}
            <div>
                <Section color="#B9B9B9" id="Profile">
                    <Profile />
                </Section>
                <Section color="#03010c" id="Experiences">
                    <Experiences />
                </Section>
                <Section color="#B9B9B9" id="Abilities">
                    <Abilities />
                </Section>

                <Section color="#03010c" id="Projects">
                    <Projects />
                </Section>
                <Section color="#B9B9B9" id="Contact">
                    <ContactForm />
                </Section>
            </div>
        </div>
    )
}

export default ResumeContent;