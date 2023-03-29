import React from 'react';
import SectionHeader from '.././SectionHeader';
import './profileCss.css'

const Profile = () => {
    return (<div>
        <SectionHeader h1="Profile" h3="I am a Full stack software developer" />

        <div id="profileImage"></div>
        <div id="AboutMeDiv">  <h2>About me</h2>
            <h3>As a proficient full-stack software engineer with over 4 years of commercial experience, I specialize in C#, .Net, SQL, and cloud technologies like AWS and Azure. My secondary skills include front-end technologies such as React, JavaScript, HTML, and CSS, enabling me to excel as a well-rounded full-stack engineer.</h3>

            <h3>Holding a Master's degree in Computer Science, I've honed my abilities through various personal and university projects. My passion for technology has led me to explore Python machine learning libraries and further refine my front-end skills. This diverse expertise positions me as a valuable asset in any full-stack engineering role, excelling in both back-end and front-end development.</h3>
            <h2>Details</h2>
            <h3>Name: Nathan Rawson</h3>
            <h3>Age: 27</h3>
            <h3>Location: Austin, TX</h3>
        </div></div>
    )
}

export default Profile;