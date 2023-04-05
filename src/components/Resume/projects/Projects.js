import React from 'react';
import SectionHeader from '../SectionHeader';
import Project from './project';

const Projects = () => {
    return (
        <div>
            <SectionHeader h1="Personal Projects" h3="“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs" />
            <Project
            images={['https://res.cloudinary.com/dng8alzfo/image/upload/v1680577258/ambitionHero.com.png','https://res.cloudinary.com/dng8alzfo/image/upload/v1680577938/APIAmbitionHero.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577265/ambitionHeroLogin.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577247/ScreenshotAmbitions.png']}
            href="https://ambitionhero.com"
            title="Ambition Hero"
            content="Ambition Hero is a user-friendly web application designed to help users effectively manage their ambitions by breaking them down into goals and tasks. Developed using a C# .NET API and a React front-end, the platform offers a production-ready solution, complete with integrated email functionality for user email confirmation during registration and a password recovery flow. The application utilizes ASP.NET Core Identity with HTTP-only cookie authentication and implements CORS policies to secure the API. The API is hosted on a subdomain, while the front-end resides on the main domain. For data storage, the app employs SQL with stored procedures to ensure efficiency and security. Hosted on the Azure cloud platform, Ambition Hero provides a seamless and secure experience for users striving to achieve their goals and track their progress."
        />
            <Project
            images={['https://res.cloudinary.com/dng8alzfo/image/upload/v1680577361/VeiybLogin.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577947/MLApi.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577216/veiybData.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577237/dataView.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577221/PrepareData.png', 'https://res.cloudinary.com/dng8alzfo/image/upload/v1680577228/LRTest.png']}
            href="https://veiyb.com"
            title="Live Data Analysis Tool"
            content="This live data analysis tool is a comprehensive solution for cleaning, analyzing, storing, and retrieving data. Built using a .NET C# stack, Azure Storage (Blob Storage), SQL, and React, the application is hosted on the Azure cloud platform. The tool supports various analytical techniques, such as linear regression, providing valuable insights into the data. With a focus on security, the application employs HTTP-only cookie authentication and authorization using ASP.NET Core Identity. To ensure efficient and secure data operations, stored procedures are used for Handling the data. This live data analysis tool showcases a professional approach to data management, catering to a wide range of use cases across industries."
            />

            <Project
                images={['https://res.cloudinary.com/dng8alzfo/image/upload/v1607376930/Resume/ForexTradeScreenshot.png']}
                href="https://github.com/Nathanrawson/FinalProjectCode"
                title="Python Forex Trading Bot"
                content="This project was part of my final research project during my university master's program, where I investigated modern approaches to forex automation. I aimed to develop a fully automated trading bot by attempting various Machine Learning and Neural Network approaches. The actual bot uses Naive Bayes predictions based on time-series data from previous trades to make buy and sell decisions at 30-minute intervals. I also tried implementing a Martingale system approach, hoping that doubling up on new investments would cover any losses. Although the results showed a 52% success rate in generating profit, I believe that integrating a deep reinforcement model and additional machine learning models could lead to a more accurate forex bot."
            />
            <Project
                images={['https://res.cloudinary.com/dng8alzfo/image/upload/v1607381381/Resume/YouTube.png']}
                href="https://nathanrawson.com/videos"
                title="React YouTube Clone"
                content="The React YouTube clone uses the YouTube API and was part of a React course I completed. By clicking on the image above or following the provided link, you can find more information about the course and view the project."
            />
            <Project
                images={['https://res.cloudinary.com/dng8alzfo/image/upload/v1607381237/Resume/yelptravel.png']}
                href="https://sheltered-tor-88156.herokuapp.com/cities"
                title="Yelp Clone"
                content="This Yelp clone was the final project of the first web developer course I took. It uses HTML, CSS, JavaScript, Node.js, MongoDB, and Express for the backend. Although the UI appears basic, the project taught me the fundamentals of creating a full-stack website that utilizes authentication, a database, and external APIs."
            />
        </div>
    )
}

export default Projects;
