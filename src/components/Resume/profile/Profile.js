import React from 'react';
import SectionHeader from '.././SectionHeader';
import './profileCss.css'

const Profile = () => {
    return (<div>
        <SectionHeader h1="Profile" h3="I am a Full stack software developer" />

        <div id="profileImage"></div>
        <div id="AboutMeDiv">  <h2>About me</h2>
            <h3>Senior full-stack developer with a strong foundation in C#, .NET, SQL, and cloud technologies like AWS and Azure, I have spent over four years perfecting my craft in both back-end and front-end technologies, including React, JavaScript, HTML, and CSS. This well-rounded skillset allows me to excel as a versatile full-stack engineer.
</h3>
<h3>I hold a Master's degree in Advanced Computer Science, and my innate curiosity has driven me to explore a wide array of programming languages and technologies. In my personal time, I have pursued game development courses, working with Unreal Engine in C++ and Unity in C#, as well as delving into natural language processing.</h3>
<h3>I also occasionally write .Net articles via medium if you would like to check out some of my work <a  target="_blank" rel="noreferrer" href="https://medium.com/@nathanrawson">here</a> </h3>

    
            <h2>Details</h2>
            <h3>Name: Nathan Rawson</h3>
            <h3>Age: 27</h3>
            <h3>Location: Austin, TX</h3>
        </div></div>
    )
}

export default Profile;