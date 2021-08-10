import { Avatar } from '@material-ui/core';
import React from 'react'

import './Sidebar.css';
function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://cdn.wallpapersafari.com/2/72/8np2J4.jpg" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>User</h2>
                <h4>user_sample@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar__statNumber">2,453</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,345</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Python")}
                {recentItem("React Js")}
                {recentItem("Software Engineering")}
                {recentItem("Front End Developer")}
                {recentItem("NodeJs")}
            </div>
        </div>
    )
}

export default Sidebar
