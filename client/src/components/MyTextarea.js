import styles from './components.module.css';

const MyTextarea = ({ value, action, title }) => {
    return (
        <div className = {styles.myTextarea} >
            <textarea 
                value = {value}
                onChange = { action }
            />
            <label>{ title }</label>
        </div>
    );
};

export default MyTextarea;