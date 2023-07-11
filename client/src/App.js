import Header from "./containers/Header";
import SideManue from './containers/SideManue';
import { Home, Explore, Notification, Trash, Setting } from './pages'

import { Routes, Route } from "react-router-dom";

import styles from './app.module.css';

const App = () => {
    return (
        <div className={styles.app} >
            <Header />
            <div className={styles.app_contaner} >
                <SideManue />
                <div className={styles.app_page_contaner} >

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/trash" element={<Trash />} />
                        <Route path="/setting" element={<Setting />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;