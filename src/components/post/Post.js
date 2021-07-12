import React from 'react';
import './Post.css'
import Avatar from "@material-ui/core/Avatar";
import InputOption from "../input_option/InputOption";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {useSelector} from "react-redux";
import {selectUser} from "../../app/features/userSlice";

const Post = ({name, description, message, photoUrl}) => {

    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like'  color='gray' />
                <InputOption Icon={ChatBubbleIcon} title='Comment'  color='gray' />
                <InputOption Icon={ShareIcon} title='Share'  color='gray' />
                <InputOption Icon={SendIcon} title='Send'  color='gray' />
            </div>

        </div>
    );
};

export default Post;