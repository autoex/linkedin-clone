import React from 'react';
import './Header.css';
import HeaderSearch from "./header_search/HeaderSearch";
import HeaderOption from "./header_option/HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../app/features/userSlice";
import {auth} from "../../firebaseConf";

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch =useDispatch()
    const logoutApp =()=> {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className="header__left">
                <img src='https://image.flaticon.com/icons/png/512/174/174857.png' alt=''/>
                <HeaderSearch/>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title={'Home'}/>
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'}/>
                <HeaderOption Icon={BusinessCenterIcon} title={'Jobs'}/>
                <HeaderOption Icon={ChatIcon} title={'Messaging'}/>
                <HeaderOption Icon={NotificationsIcon} title={'Notifications'}/>
                <HeaderOption onClick={logoutApp} avatar={true} title={user?.displayName}/>
            </div>
        </div>
    );
};

export default Header;