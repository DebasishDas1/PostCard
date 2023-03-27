import styles from './posts.module.css';

const MyPostContext = ({ title, message, selectedFile }) => {
    return (
        <div className = {styles.MyPostContext}  >
            { title &&  <h3> {title} </h3>  }
            { message &&  <h3> {message} </h3> }
            { selectedFile && <img src={selectedFile} alt={title} /> }
        </div>
    );
}

export default MyPostContext;