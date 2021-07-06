import React, {useEffect, useState} from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "../input_option/InputOption";
import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';
import EventIcon from '@material-ui/icons/Event';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import Post from "../post/Post";
import {db} from '../../firebaseConf'
import firebase from "firebase";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) =>{
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })));

            }


        )
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'SS ff',
            description: 'test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })


    }
    return (
        <div className='app__feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="inputOptions">
                    <InputOption Icon={PhotoIcon} title='Photo' color='#7BB3F7'/>
                    <InputOption Icon={MovieIcon} title='Video' color='#D6AE76'/>
                    <InputOption Icon={EventIcon} title='Event' color='lightgray'/>
                    <InputOption Icon={AddToQueueIcon} title='Write article' color='orange'/>
                </div>
            </div>
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post
                    key={id} name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}/>
            ))}

        </div>
    );
};

export default Feed;