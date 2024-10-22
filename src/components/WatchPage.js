import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from "./CommentContainer"
import LiveChat from './LiveChat';


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch= useDispatch();
    
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

    

  return (
    <div className='flex flex-col w-[100%] pt-20 '>
      <div className='px-3 flex w-[100%]'>
        <div className='w-[80%] bg-slate-300 relative bg-contain'>
          <iframe 
          className='absolute'
          width="100%"
          height="100%" 
          src={"https://www.youtube.com/embed/"+ searchParams.get("v") }
          title="YouTube video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
        <div className='w-[20%]'>
          <LiveChat/>
        </div>
      </div>
      <CommentContainer/>
    </div>
  )
}

export default WatchPage