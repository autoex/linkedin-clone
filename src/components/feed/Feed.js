import React, {useState} from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "../input_option/InputOption";
import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';
import EventIcon from '@material-ui/icons/Event';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import Post from "../post/Post";

const Feed = () => {
    const [posts, setPost] = useState(['First post']);
    const sendPost =(e)=> {
        e.preventDefault()

    }
    return (
        <div className='app__feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="inputOptions">
                    <InputOption Icon={PhotoIcon} title='Photo' color='#7BB3F7' />
                    <InputOption Icon={MovieIcon} title='Video' color='#D6AE76' />
                    <InputOption Icon={EventIcon} title='Event' color='lightgray' />
                    <InputOption Icon={AddToQueueIcon} title='Write article' color='orange' />
                </div>
            </div>
            {posts.map((post, idx) => <Post name='Alex' key={idx} message={post} description='This is a description' />)}

        </div>
    );
};

export default Feed;