import React from 'react';
import SectionHeader from '../SectionHeader';
import './Experiences.css';
import ExperiencesSection from './ExperiencesSection';


const Experiences = () => {
    return (<div className=""><SectionHeader h1="Experiences" h3='“Don’t let yesterday take up too much of today.” – Will Rogers"' />
        <div className="experience-div">
            <h2 className="mobile-title">Education</h2>
            <ExperiencesSection qualififcation="MSC Advanced Computer Science" place="University Of Hertfordshire" date="Sep 2019-Sep 2020" content="The course far broadened my understanding in key computer science concepts in areas such as Data Science, Computational Algorithms and Paradigms, Neural Networks and Machine Learning and Legal and ethical issues associated with software development." />
            <ExperiencesSection qualififcation="BA Business Management (Economics)" place="University Of East London" date="Sep 2015-May 2018" content="Here I learned Key business concepts in areas such as Human Resources, Marketing, Corporate Finance, Economics, Accountancy, Supply Chain Management and many more." />
            <h2 className="mobile-title">Career</h2>
            <ExperiencesSection qualififcation="C# Engineer" place="Push Live" date="Nov 2021-present" content="At Push Live, an online digital broadcasting platform renowned for its work with the Red Bull car launch. During my tenure, I have played a pivotal role in migrating legacy VB code to a new .Net core API, significantly enhancing performance and scalability. Additionally, I have implemented modern software development practices, such as SOLID principles, to improve code quality and maintainability. My experience at Push Live has allowed me to work extensively with SQL, Dynamo, S3, AWS tools, and Node.js, all within an Agile development environment that emphasizes TDD and Jira for project management and task tracking." />
            <ExperiencesSection qualififcation="Web Application Developer" place="Sports Allliance" date="Mar 2021-Nov 2021" content="Sports Alliance is a leading provider of fan data management and digital marketing solutions, and during my time there, I had the opportunity to build products for prestigious football clubs such as West Ham and Tottenham. My responsibilities included integrating our single sign-on product with clients' products and online services, as well as implementing their bespoke branding. I worked with a diverse tech stack, including .NET, C#, HTML, CSS, SQL, Azure, and JavaScript. Furthermore, I contributed to the development of solutions for the core Marketing and CRM product and created bespoke loyalty pages that integrated with our CRM, enabling clients to gain a better understanding of user data." />
           
            <ExperiencesSection qualififcation="Junior Software Developer" place="SPUD (Start Processing Useful Data)" date="Aug 2019-Mar 2021" content="At Start Processing Useful Data (SPUD), a construction management tool provider offering products for HR, Supply Chain Management, Accounts Keeping, and niche construction services like Site Diaries, I held the position of Junior Software Developer. In this role, I focused on creating and managing test-driven code within a diverse tech stack that included .NET, C#, HTML, CSS, Mongo, SQL, and JavaScript. My responsibilities encompassed adding new features to the software, addressing complex bugs, and implementing the use of various APIs.

Working within a small Agile team, I utilized Git and Azure DevOps while participating in daily scrum meetings. To ensure the quality and reliability of our software, I created tests in VSTS test lab and automated tests using C# Selenium. This experience allowed me to develop a strong foundation in software development while working effectively in a collaborative, fast-paced environment." />
            <ExperiencesSection qualififcation="Help Desk Manager/ Software Tester" place="" date="Sep 2018-Sep 2019" content="My first role at SPUD briefly started as an Admin assistant where I quickly went on to testing the software and handling all customer Help Desk Calls. The role alongside my dedication to intensive online learning in web development would lead to my next role as a Junior software developer." />
           
        </div>
    </div>);
}

export default Experiences