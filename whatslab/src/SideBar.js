import React from 'react'
import "./SideBar.css"
import { Avatar, IconButton } from '@mui/material'
import { DonutLarge, MoreVert } from '@mui/icons-material'
import MessageIcon from '@mui/icons-material/Message';

function SideBar() {
    return (
        <div className='sidebar'>
            
            <div className='sidebar__header'>
                <Avatar/>
                <div className='sidebar__headerRight'>
                    <IconButton><DonutLarge/></IconButton>
                    <IconButton><MessageIcon/></IconButton>
                    <IconButton><MoreVert/></IconButton>  
                    
                </div>

            </div>

            <div className='sidebar__search'>

            </div>

            <div className='sidebar__chats'>

            </div>

        </div>
    )
}

export default SideBar