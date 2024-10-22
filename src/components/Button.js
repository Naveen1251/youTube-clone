import React from 'react'
// import { useSelector } from 'react-redux';

const Button = ({name}) => {
  // const isMenuopen = useSelector((store) => store.app.isMenuOpen);
  // if(isMenuopen) return (
  //   <div className='px-5  py-2 m-2 bg-gray-200  rounded-lg'>
  //       <button>{name}</button>
  //   </div>
  // )

  return (
    <div className='px-5  py-2 m-2 bg-gray-200  rounded-lg'>
        <button>{name}</button>
    </div>
  )
}

export default Button