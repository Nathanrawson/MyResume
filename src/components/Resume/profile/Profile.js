import React from 'react';
import SectionHeader from '.././SectionHeader';
import './profileCss.css'

const Profile = () => {
    return ( <div>
        <SectionHeader h1="Profile" h3="I am a Full stack software developer"/>
   
    <div id="profileImage"></div>
    <div id="AboutMeDiv">  <h2>About me</h2><h3>I am a full-stack software developer with over 1 year of commercial dev experience with .Net MVC, Javascript, HTML, CSS and SQL. I also hold a Masters degree in computer science and have years of experience coding on personal and uni projects. I have a passion for everything technology and have used many languages and platforms outside of my work. For example, this website is built using a React framework, a framework I love and enjoy using for front end projects.</h3>
    
    <h2>Details</h2>
    <h3>Name: Nathan Rawson</h3>
    <h3>Age: 25</h3>
    <h3>Location: Welwyn Garden City</h3>
    </div></div>
   )
}

export default Profile;