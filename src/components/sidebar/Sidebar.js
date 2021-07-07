import React from 'react';
import './Sidebar.css'
import Avatar from "@material-ui/core/Avatar";

const Sidebar = () => {
    const recentItem = (title) => (
        <div className='sidebar__recentItem'>
            <span className="sidebar__hash">#</span>
            <p>{title}</p>
        </div>
    )
    return (
        <div className='app__sidebar'>
            <div className='sidebar'>

            <div className='sidebar__top'>
                <img
                    src="https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?size=626&ext=jpg"
                    alt=""/>
                <Avatar/>
                <h2>Alan Born</h2>
                <h4>born@gmail.com</h4>
            </div>
            <div className="sidebar__stat">
                <div className="sidebar__stats">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2500</p>
                </div>
                <div className="sidebar__stats">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2500</p>
                </div>
            </div>
            <div className="sidebar__bottom">Recent
                {recentItem('js')}
                {recentItem('football')}</div>
        </div></div>
    );
};

export default Sidebar;