import React, {useEffect} from 'react';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./widgets/Widgets";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from './app/features/userSlice'
import Login from "./components/login/Login";
import {auth} from "./firebaseConf";

const App = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(()=>{
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL
            }))
            }
            else {
                dispatch(logout())
            }
        })
    }, [])

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