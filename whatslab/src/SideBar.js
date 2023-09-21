import React from 'react'
import "./SideBar.css"
import { Avatar, IconButton } from '@mui/material'
import { DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import MessageIcon from '@mui/icons-material/Message';
import SideBarChat from './SideBarChat';

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
                <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input type='text' placeholder="procure ou comece um chat"></input>
            </div>
            </div>

            <div className='sidebar__chats'>
                <SideBarChat addNewChat/>
            </div>

        </div>
    )
}

export default SideBar