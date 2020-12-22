import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);

    // custom hook inputs are what is returned from the hook
    const [videos, search] = useVideos('buildings');

    // when we get a new list of videos or when it changes, we will select the very first video in that list
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    
      
    return (
        <div className="ui container">

        {/* //calls search function in custom hook useVideos */}
        <SearchBar onFormSubmit={search}/> 
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column"> 
                    <VideoDetail video={selectedVideo}/> 
                </div>
                
                <div className="five wide column"> 
                    <VideoList 
                    onVideoSelect={setSelectedVideo} 
                    videos={videos} 
                    />
                </div>
            </div>
        </div>
    </div>
    );


};



export default App;