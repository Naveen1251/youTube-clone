import React, { useEffect, useState } from 'react'

import { generateRandomString, randomNameGenerate } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import ChatMessage from './ChatMessage'


const LiveChat = () => {
  const [liveMessage,setLiveMessage] = useState("")
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store)=> store.chat.messages)

  
  
  useEffect(()=>{
    const i = setInterval(()=>{

      dispatch(
        addMessage({
          name : randomNameGenerate(),
          message:generateRandomString(20),
        })
      );

    },5000)
   return ()=>clearInterval(i) 
  },[])

  return (
    <>
    
      <div className='w-full h-[600px] ml-2 p-2 bg-slate-50  overflow-y-scroll rounded-lg flex flex-col-reverse '>
        <div>
          {ChatMessages.map((c,i)=>(
            <ChatMessage key={i} name={c.name} message={c.message}/>))}
        </div>
      </div>
      <form
      className='w-full p-2 ml-2 border border-black flex'  
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Naveen Prakash",
            message: liveMessage,
        })
      );
      setLiveMessage('');
      }} >
        <input className='w-auto md:w-[80px] xl:w-[200px] lg:w-[120px] px-1 lg:absolute border'placeholder='input' 
        type='text'
        value={liveMessage}
        onChange={(e)=>{
          setLiveMessage(e.target.value);
        }}
        />
        <button className='px-2 mx-2  lg:bg-slate-400 lg:relative ml-auto bg-green-50'>Send</button>
      </form>
    </>
  )
}

export default LiveChat