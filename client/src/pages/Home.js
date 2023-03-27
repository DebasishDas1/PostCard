import MyForm from '../containers/MyForm';

import styles from './page.module.css';

const Home = () => {
    return (
        <div className={styles.home} >
            <MyForm />
        </div>
    );
};

export default Home;