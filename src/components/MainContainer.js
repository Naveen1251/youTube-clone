import React from 'react'

  
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuopen) return (
    <div className=' col-span-12 z-0  top-[140px]  relative'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )



  return (
    <div className = 'z-0  top-[140px]  relative'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
