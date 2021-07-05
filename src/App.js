import React from 'react';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./widgets/Widgets";
import './App.css'

const App = () => {
    return (
        <div className='app'>
          <Header />
          <div className="app__main">
              <Sidebar/>
              <Feed/>
              <Widgets />
          </div>
        </div>
    );
};

export default App;