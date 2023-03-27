import styles from './components.module.css';

const MyButton = ({ title, action }) => {
    return (
        <div 
            className = {styles.myButton} 
            onClick = {action} 
        >
            {title}
        </div>
    );
};

export default MyButton;