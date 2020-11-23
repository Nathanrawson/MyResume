import React from 'react';
import Videos from './Videos'
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './Resume/Resume';
import ResumeContent from './Resume/ResumeContent'
import './app.css';


const App = () => {
   // setSelectedVideo(response.data.items[0])

 return (
 <div id="App" className="">
     <BrowserRouter>
    <Route path="/videos" exact component={Videos}/>
        <Route path="/" exact component={Resume}/>
    <Route path="/resume" exact component={ResumeContent}/>
    </BrowserRouter>
 </div>
 );
};


export default App;