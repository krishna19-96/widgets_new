import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';



const App = () =>{
    
    const [selectVideo, setSelectVideo] = useState(null);
    const [video, Search] = useVideos('Billi Elish Song');

    useEffect(()=>{

        setSelectVideo(video[0]);

    },[video])




    

     return(
        <div className='ui container'>
            <SearchBar onFormSubmit = {Search}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'> 
                        <VideoDetail video={selectVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList 
                            onVideoSelect = {setSelectVideo}
                            videos = {video} 
                        />
                    </div>
                </div>
            </div>
        </div> 
        );






}


export default App;