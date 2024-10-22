import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className=' flex items-center shadow-sm p-2 '>
        <img  className='col-span-1 h-8 md:h-3 lg:h-6 xl:h-9' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&s'/>
        <span className='font-bold px-2 md:text-[8px] lg:text-[10px] xl:text-[16px]'>
            {name}
        </span>
        <span className='md:text-[7px] lg:text-[8px] xl:text-[12px]'>
            {message +"🚀"  }
        </span>
    </div>
  )
}

export default ChatMessage