import React from 'react';
import './Header.css';
import HeaderSearch from "../header_search/HeaderSearch";
import HeaderOption from "../header_option/HeaderOption";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src='https://image.flaticon.com/icons/png/512/174/174857.png' alt=''/>
                <HeaderSearch/>
            </div>
            <div className="header__right">
                <HeaderOption/>
            </div>
        </div>
    );
};

export default Header;