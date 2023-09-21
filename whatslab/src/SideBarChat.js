import React, { useEffect, useState } from 'react'
import "./SideBarChat.css"
import { Avatar } from '@mui/material'

function SideBarChat({addNewChat}) {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Coloque um nome no chat");

        if(roomName ){
            //código database depois
        }
    };

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last Message...</p>

            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarchat'>
            <h2>Add new chat</h2>
        </div>
    )
}

export default SideBarChat