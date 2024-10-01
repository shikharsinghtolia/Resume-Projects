import React, { useEffect, useState } from 'react'
import axios from "axios"
const ChatPage = () => {
    const [chats,setchats] = useState([]);
    const fetchChats = async ()=>{
        const{ data }= await axios.get('/api/chat')
        setchats(data)
        // console.log(data)
    
    
    }
    // console.log(`here is chats ${chats}`)
    // console.log(chats)
    
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
       {chats.map((chat)=>(
        <div key={chat._id} >{chat.chatName}</div>
       ))}
    </div>
  )
}

export default ChatPage