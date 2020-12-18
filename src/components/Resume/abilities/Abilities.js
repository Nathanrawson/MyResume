import React from 'react';
import SectionHeader from '../SectionHeader'
import AbilityBox from './AbilityBox';


const Abilities = () => {

    const abilitiesArray1 = [
        {ability:"Bootstrap",stars:5},
        {ability:"HTML",stars:5},
        {ability:"CSS",stars:5},
        {ability:"Javascript",stars:5},
        {ability:"JQuery",stars:4},
        {ability:"C#",stars:5},
        {ability:"Python",stars:4},
        {ability:"Node Js",stars:3},
        {ability:"Scrum",stars:5},
        {ability:"Kanban",stars:5},
        {ability:"Mongo",stars:3},
        {ability:"Json",stars:4},
        {ability:"SQL",stars:4},
        {ability:".Net and .Net Core",stars:5},
        {ability:"React",stars:4},
    ]

    const abilitiesArray2 = [
        {ability:"Wordpress",stars:4},
        {ability:"SEO",stars:3},
        {ability:"SciPy",stars:4},
        {ability:"Pandas",stars:4},
        {ability:"Scikit-Learn",stars:4},
        {ability:"Numpy",stars:4},
        {ability:"Keras",stars:3},
        {ability:"Tesnsorflow",stars:4},
        {ability:"Matlab",stars:3},
        {ability:"R",stars:2},
        {ability:"React Native",stars:3},
        {ability:"Git",stars:5},
        {ability:"Java",stars:3},
        {ability:"Lisp",stars:2},
        {ability:"Haskell",stars:2},
        {ability:"Prolog",stars:1},
    ]

    const abilitiesArray3 = [
        {ability:"Source Tree (Git GUI)",stars:5},
        {ability:"Android Studio",stars:4},
        {ability:"Trello",stars:5},
        {ability:"Bit Bucket",stars:5},
        {ability:"Jupyter Notebook",stars:5},
        {ability:"Spyder",stars:4},
        {ability:"PyCharm",stars:3},
        {ability:"SPSS",stars:2},
        {ability:"Bloomberg Terminal",stars:3},
        {ability:"Docker",stars:3},
    ]

    const abilitiesArray4 = [
        {ability:"Mac OS",stars:5},
        {ability:"Windows",stars:5},
        {ability:"Visual Studio",stars:5},
        {ability:"SQL Server",stars:4},
        {ability:"VS Code",stars:4},
        {ability:"Azure Cloud Services",stars:5},
        {ability:"Google Cloud Platform",stars:5},
        {ability:"Azure Boards",stars:5},
        {ability:"Anaconda",stars:5},
        {ability:"Git Hub",stars:5},
    ]

    return <div><SectionHeader h1="Abilities" h3='"Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft" - Will Smith'/>

    <div>
        <h2>Skills</h2>
        <AbilityBox Abilities={abilitiesArray1}/>
        <AbilityBox Abilities={abilitiesArray2}/>
        <hr/>
        <h2>Tools</h2>
        <AbilityBox Abilities={abilitiesArray4}/>
        <AbilityBox Abilities={abilitiesArray3}/>
    </div>
    </div>
}

export default Abilities