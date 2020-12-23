import React from 'react';
import SectionHeader from '../SectionHeader';
import Project from './project';

const Projects = () => {
    return (
        <div>
            <SectionHeader h1="Projects" h3="“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs" />
            <Project image='url(https://res.cloudinary.com/dng8alzfo/image/upload/v1607376930/Resume/ForexTradeScreenshot.png)' href="https://github.com/Nathanrawson/FinalProjectCode" title="Python Forex Trading Bot" content="The project above was a part of my final research project during my university masters. The research was investigating modern approaches to forex automation. Therefore, I wanted to attempt a few methods of my own and have at least one fully automated bot work. Clicking the image above or following this link will both take you to the GitHub repository where you'll see Machine Learning and Neural network approaches that I attempted. For the actual Bot, I decided to use Naive Bayes predictions based on Time-series Data of previous trades to make predictions of when t buy and sell based on 30-minute intervals. I then attempted to implement a Martingale system type approach in the hope that doubling up new investments would cover any losses. However, the results yielded about a 52% success rate in generating profit. I do believe, however, further enhancements to integrate a deep reinforcement model with some extra machine learning models that a more accurate forex bot would be achievable." />
            <Project image='url(https://res.cloudinary.com/dng8alzfo/image/upload/v1607381381/Resume/YouTube.png)' href="https://nathanrawson.com/videos" title="React Youtube clone" content="Simple React Youtube clone using the youtube API, the project was a part of a react course I took that can be found clicking here." />
            <Project image='url(https://res.cloudinary.com/dng8alzfo/image/upload/v1607381237/Resume/yelptravel.png)' href="https://sheltered-tor-88156.herokuapp.com/cities" title="Yelp clone" content="The final project of the first web developer course I took, a yelp clone using HTML, CSS, Javascript and for the backend Nodejs, Mongo and Express. Although the UI looks basic, the project taught me the basics of creating a full stack website that utilises authentication, a database and external API's." />

        </div>
    )
}

export default Projects