import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './HeaderSearch.css'


const HeaderSearch = () => {
    return (
        <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder='Search'/>
        </div>
    );
};

export default HeaderSearch;