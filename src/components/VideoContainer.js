import React, {useState, useEffect } from 'react'
import {YOUTUBE_VIDEO_API} from "../utils/constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
  const [ videos ,setVideos] = useState([]);
  
  useEffect(()=>{
    getVideos();
  },[])
  useEffect(()=>{
    getNewVideos();
  },[])




  window.onscroll = function(){getVideoss()};

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    
    const json = await data.json();
    setVideos(json.items);
   
   
  }

  const getNewVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    
    const json = await data.json();
    setVideos(prevState => [...prevState,...json.items]);
  }

  function getVideoss(){
    const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
   
    if (scrolledToBottom) {
      getNewVideos()
    } 
  }

  

  return (
    <div className='flex flex-wrap  top-[100px]'>
     {videos.map(video => 
     <Link key = {video.id} to={"/watch?v="+ video.id} >
      <VideoCard  key={video.id}  info={video}/></Link>)}
    </div>
  )
} 

export default VideoContainer