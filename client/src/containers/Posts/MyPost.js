import MyPostHead from './MyPostHead';
import MyPostContext from './MyPostContext';
import MyPostReaction from './MyPostReaction';
// import MyPostReactionCount from './MyPostReactionCount';

import styles from './posts.module.css';

const MyPost = ({ post }) => {
    const{ _id, creator, title, message, tags, selectedFile, createAt} = post;

    return (
        <div className = {styles.myPost}  >
            <MyPostHead creator = {creator} createAt = {createAt} id={_id} />
            <MyPostContext 
                title = {title}
                message = {message}  
                selectedFile = {selectedFile}
                tags = {tags}
            />
            {/* <MyPostReactionCount /> */}
            <MyPostReaction />
        </div>
    );
}

export default MyPost;