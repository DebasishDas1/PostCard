import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

import styles from './posts.module.css';

const MyPostHead = ({ id, creator, createAt  }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'  ]

    const month = new Date(createAt).getMonth()
    const year = new Date(createAt).getFullYear()
    const day = new Date(createAt).getDate();

    const date = `${months[month]} ${day} ${year}`;

    const editHandler = () => {
        console.log(id);
    }

    const deleteHandler = () => {}

    return (
        <div className = {styles.myPostHead}  >
            <div style={{  display: 'flex', alignItems: 'center',  marginLeft: '2rem' }}  >
                <Avatar />
                <div  style={{ display: 'flex', flexDirection: 'column' }} >
                    <h3> {creator} </h3> 
                    <h2> {date} </h2>
                </div>
            </div>
            <div style={{  display: 'flex',  marginRight: '2rem'  }}  >
                <div 
                    className = {styles.myPostHead_option}  
                    onClick = {editHandler}
                >
                    <MoreVertIcon sx={{ fontSize: 25 }} />
                </div>
                <div 
                    className = {styles.myPostHead_option} 
                    onClick = {deleteHandler}
                >
                    <CloseIcon sx={{ fontSize: 25 }} />
                </div>
            </div>
        </div>
    );
}

export default MyPostHead;