// import React, { useEffect, useState } from 'react'
// import {YOUTUBE_SEARCHQUERY_API} from "../utils/constants"
// import { Link } from 'react-router-dom';
// import VideoCard from './VideoCard';
// import { useLocation } from 'react-router-dom';

// const SearchQueary = () => {
//     const [ videos ,setVideos] = useState([]);
//     const location = useLocation();
//     const query = location.state?.query || "";

//     useEffect(()=>{
//       if(query){
//       getVideos(query);
//       }
//     },[query])

//     const getVideos = async () =>{
//         const data = await fetch( YOUTUBE_SEARCHQUERY_API + query);
        
//         const json = await data.json();
//         setVideos(json.items);
       
       
//       }
//     console.log(videos)
//     return (
//         <div className='flex'>
//          {videos.map(video => 
//          <Link key = {video.id} to={"/watch?v="+ video.id} >
//           <VideoCard  key={video.id}  info={video}/></Link>)}
//         </div>
//       )
// }

// export default SearchQueary