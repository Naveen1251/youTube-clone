import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from "../utils/appSlice"
import {YOUTUBE_SEARCH_API} from "../utils/constants"

import { cacheResults } from '../utils/searchSlice'


const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions]  = useState(false)

  const searchCache = useSelector((store)=>store.search); 
  const dispatch = useDispatch();

  // const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  useEffect(()=>{
    const timer  = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
  
      }else {
        getSearchSuggestions()
      }
      
    },200);
    return () =>{
      clearTimeout(timer)
    };
  }, [ searchQuery ]);

  const getSearchSuggestions = async()=>{
    const data  = await fetch(YOUTUBE_SEARCH_API+searchQuery)
   
    const json = await data.json()
    setSuggestions(json[1])
   

    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  }

  

  const toggleMenuHandler = () =>{
  
    dispatch(toogleMenu())
  }

  const handleSuggestionClick = (suggest)=>{
    setSearchQuery(suggest)
    setShowSuggestions(false)
  }



  // if(isMenuopen) return (
  //   <div className='grid grid-flow-col p-5 shadow-lg   w-[100vw] fixed z-[1]'>
  //     <div className='flex col-span-1'>
  //       <img
  //       onClick={()=>toggleMenuHandler()}
  //       className=' h-8 cursor-pointer absolute ' alt='menu' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&s'/>
  //       <hi>hi</hi>
  //       <img  className='h-8 mr-6 ml-5'alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQohyPmIYFB3WwInZ8w7Se_YmIP9aSVtcTVZECb1OVB4TmW0EUBJXvO6udnYNBZJJo80&usqp=CAU'/>
  //     </div>
  //     <div className=' col-span-10 px-30' >
  //       <div>
  //         <input className=' px-5 p-2 w-1/2 border border-gray-400 rounded-l-full' 
  //         type='text'
  //         value={searchQuery}
  //         onChange={(e) => setSearchQuery(e.target.value)}
  //         onFocus={()=>setShowSuggestions(true)}
  //         onBlur={()=>setShowSuggestions(false)}
  //         />
  //         <button className='p-2 border border-gray-400  rounded-r-full bg-gray-300 ' >search</button>
  //       </div>
  //       {showSuggestions && (<div className=' absolute bg-white py-2 px-2 w-[35.5rem] shadow-lg rounded-lg border-gray-100'>
  //         <ul>
  //           {suggestions.map((s,index) => (<li  key ={index} className='py-2 px-3 shadow-sm hover:bg-gray-100' onMouseDown={() => handleSuggestionClick(s)}>⌕ {s}</li>))}
  //           {/* to={{pathname : `/search_query=${searchQuery}`,state: {query: s}}} */}
  //         </ul>
  //       </div>)}
  //     </div>
  //     <div>
  //       <img  className='col-span-1 h-8' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&s'/>

  //     </div>
  //   </div>
  // )

  return (
    <div className="grid grid-flow-col p-5 fixed z-10 shadow-lg+ w-[100vw]  bg-white">
      <div className='flex col-span-1'>
        <img
        onClick={()=>toggleMenuHandler()}
        className=' h-8 cursor-pointer' alt='menu' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&s'/>
        <img  className='h-8 ml-2'alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQohyPmIYFB3WwInZ8w7Se_YmIP9aSVtcTVZECb1OVB4TmW0EUBJXvO6udnYNBZJJo80&usqp=CAU'/>
      </div>
      <div className=' col-span-10 px-30' >
        <div>
          <input className=' px-5 p-2 w-1/2 border border-gray-400 rounded-l-full' 
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          />
          <button className='p-2 border border-gray-400  rounded-r-full bg-gray-300 ' >search</button>
        </div>
        {showSuggestions && (<div className=' absolute bg-white py-2 px-2 w-[35.5rem] shadow-lg rounded-lg border-gray-100'>
          <ul>
            {suggestions.map((s,index) => (<li  key ={index} className='py-2 px-3 shadow-sm hover:bg-gray-100' onMouseDown={() => handleSuggestionClick(s)}>⌕ {s}</li>))}
            {/* to={{pathname : `/search_query=${searchQuery}`,state: {query: s}}} */}
          </ul>
        </div>)}
      </div>
      <div>
        <img  className='col-span-1 h-8' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&s'/>

      </div>
    </div>
  )
}

export default Head