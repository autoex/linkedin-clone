import React from 'react';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./widgets/Widgets";
import './App.css'
import {useSelector} from "react-redux";
import {selectUser} from './app/features/userSlice'
import Login from "./components/login/Login";

const App = () => {
    const user = useSelector(selectUser);

    return (
        <div className='app'>
          <Header />
            {user ? <div className="app__main">
                <Sidebar/>
                <Feed/>
                <Widgets />
            </div> :
            <Login/>}

        </div>
    );
};

export default App;