import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuopen) return null;   
    
  return (
    <div className='p-5 shadow-lg  w-auto   max-w-[20%] z-0 h-[100vh] top-[100px] sticky'>
      
      <ul>
        <li><Link to='/'>Home</Link> </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar