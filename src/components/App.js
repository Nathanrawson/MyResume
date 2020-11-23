import React from 'react';
import Videos from './Videos'
import Route from './Route'
import Resume from './Resume/Resume';
import ResumeContent from './Resume/ResumeContent'
import './app.css';


const App = () => {
   // setSelectedVideo(response.data.items[0])

 return (
 <div id="App" className="">

	 <Route path="/videos">
<Videos/>
</Route>
	 <Route path="/">
<Resume/>
</Route>
	 <Route path="/resume">
<ResumeContent/>
</Route>
 </div>
 );
};


export default App;