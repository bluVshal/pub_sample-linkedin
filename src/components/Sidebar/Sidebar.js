import { Avatar } from '@material-ui/core';
import React from 'react'

import './Sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar />
                <h2>User</h2>
                <h4>user_sample@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar__statNumber">2,453</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,456</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
