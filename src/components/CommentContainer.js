import React from 'react'
 
const commentsData = [
    {
        name: "Paul",
        text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
        replies : [
            {
                name: "Paul",
                text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
                replies : [
                    {
                        name: "Paul",
                        text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
                        replies : [

                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Paul",
        text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
        replies : [
            {
                name: "Paul",
                text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
                replies : [
        
                ]
            },
            {
                name: "Paul",
                text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
                replies : [
                    {
                        name: "Paul",
                        text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
                        replies : [
                
                        ]
                    },
                ]
            },

        ]
    },
    {
        name: "Paul",
        text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
        replies : [
            {
                name: "Paul",
                text : "atch the WWDC24 keynote introducing Apple Intelligence, personal intelligence designed to be helpful and relevant to you",
                replies : [
        
                ]
            },

        ]
    },
];


const Comment = ({data})=>{
    const {name,text} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-1 w-auto'>
            <img
            className='w-12 h-12'
            alt = "user"
            src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}


const CommentsList = ({comments})=>{
    return comments.map((comment,index)=> (
        <div>
            <Comment key={index} data = {comment}/>
            <div className='pl-5 border border-l-black ml-5'>
              <CommentsList comments = {comment.replies}/> 
            </div>
        </div>
    
));

}

const CommentContainer = () => {
  return (
    <div className='mt-5 p-2 w-[100%]'>
        <h1 className='text-xl  font-bold'>Comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer