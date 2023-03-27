import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import './feed.css'
import { useState } from 'react';

const MessageSender = () => {
    const [input, sttInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const messageHandler = (e) => {
        e.preventDefault();
        
        sttInput('');
        setImageUrl('');
    }

    return (
        <div className="messageSender" >
            <div className="messageSender__top" >
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange = { (e) => sttInput(e.target.value) }
                        placeholder="What's on your mind"
                    />
                    <input 
                        value={imageUrl}
                        onChange = { (e) => setImageUrl(e.target.value) }
                        placeholder='Upload image'
                    />
                    <button onClick = {messageHandler} type='submit' >Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom" >
                <div className='messageSender__option' >
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option' >
                    <PhotoCameraIcon style={{ color: 'green' }} />
                    <h3>Photo/video</h3>
                </div>
                <div className='messageSender__option' >
                    <LocalActivityIcon style={{ color: 'orange' }} />
                    <h3>Feelings/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;