import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux';
 

let btnNames = ["News","Cricket","Football","Chess","Movies","Trending","Badminton","Bikes","Travel","Trade","Drawing","Right","Left","Bottom","Trending","Badminton","Bikes","Travel","Trade","Drawing","Right","Left","Bottom"]
const ButtonList = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  if(isMenuopen) return (
    <div className='flex bg-white overflow-x-scroll  top-[81px] md:left-[19%] lg:left-[14%] xl:left-[10%] left-[13.5%] right-0 fixed md:w-[90vw] lg:w-[85vw] xl:w-[90vw] w-[67%]'>
      {btnNames.map((a,index) => <Button key = {index}  name = {a}/>)}
    </div>
  )

  return (
    <div className='flex bg-white overflow-x-scroll top-[81px] left-0 right-1 fixed w-auto'>
      {btnNames.map((a,index) => <Button key = {index}  name = {a}/>)}
    </div>
  )
  
}

export default ButtonList