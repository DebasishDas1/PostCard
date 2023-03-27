import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

import styles from './posts.module.css';

const MyPostReaction = () => {
    return (
        <div className = {styles.myPostReaction}  >
            <div className = {styles.myPostReaction_option}  >
                <ThumbUpIcon sx={{ fontSize: 25 }} />
                <h3>Like</h3>
            </div>
            <div className = {styles.myPostReaction_option}  >
                <ChatBubbleIcon sx={{ fontSize: 25 }} />
                <h3>Comment</h3>
            </div>
            <div className = {styles.myPostReaction_option}  >
                <ShareIcon sx={{ fontSize: 25 }} />
                <h3>Share</h3>
            </div>
        </div>
    );
}

export default MyPostReaction;