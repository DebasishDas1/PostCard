import styles from './components.module.css';

const MyTask = ({ value, action, title }) => {
    return (
        <div className={styles.myInput} >
            <input
                value={value}
                onChange={action}
            />
                    ok
            <label>{title}</label>
        </div>
    );
};

export default MyTask;
