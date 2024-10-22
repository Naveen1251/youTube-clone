import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
  const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  if(isMenuopen) return (
    <div className=' p-2 m-2 sm:w-[297px] lg:w-[425px] h-55 xl:w-[416px] '>
      <img className=' rounded-lg w-full' alt='video' src={info?.snippet?.thumbnails?.medium?.url}/>
      <ul>
        <li className=' font-bold py-2 truncate'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
     
    </div>
  )

  return (
    <div className=' p-2 m-2 w-60  h-65  md:w-66  xl:w-[344px]  lg:w-[325px] '>
      <img className=' rounded-lg w-full' alt='video' src={info?.snippet?.thumbnails?.medium?.url}/>
      <ul>
        <li className=' font-bold py-2 truncate'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
     
    </div>
  )
}

export default VideoCard