import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'
import Navbar from './Navbar';
import './app.css'

const Videos = () => {

   const [selectedVideo, setSelectedVideo] = useState(null);
   const [videos, search] = useVideos('farm pig competion')

   useEffect(() => {
      setSelectedVideo(videos[0]);
   }, [videos]);



   // setSelectedVideo(response.data.items[0])

   return (
      <div>
         <Navbar />
         <div className="ui container">

            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
               <div className="ui row">
                  <div id="video" className="eleven wide column">
                     <VideoDetail video={selectedVideo} />
                  </div>
                  <div id="videoList" className="five wide column">
                     <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

};


export default Videos;