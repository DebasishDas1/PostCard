import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

import MyButton from '../../components/MyButton';

import styles from './header.module.css';

const HeaderProfile = () => {
    const createHandler = () => {
        alert('yo')
    }

    return (
        <div className = {styles.header__profile} >
            <MyButton 
                title='Create'
                action = {createHandler}
            />
             <div className = {styles.header__option}>
                <AppsIcon sx={{ fontSize: 25 }} />
             </div>
             <div className = {styles.header__option}>
                <NotificationsIcon sx={{ fontSize: 25 }} />
             </div>
            <Avatar />
        </div>
    );
};

export default HeaderProfile;