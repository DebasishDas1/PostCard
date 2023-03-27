import SideBarProfile from './SideBarProfile';
import SideBarRow from './SideBarRow';

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

import MyButton from '../../components/MyButton';

import styles from './sideManue.module.css';

const SideManue = () => {
    const createHandler = () => {
        alert('yo')
    }

    return (
        <div className = {styles.sideManue} >
            <SideBarProfile />
            <SideBarRow title = 'Home' Icon={HomeIcon} link = '/'/>
            <SideBarRow title = 'Explore' Icon={ExploreIcon} link = '/explore' />
            <SideBarRow title = 'Notification' Icon={NotificationsIcon} link = '/notification'/>
            <SideBarRow title = 'Trash' Icon={DeleteIcon} link = '/trash'/>
            <SideBarRow title = 'Setting' Icon={SettingsIcon} link = '/setting'/>
            <MyButton 
                title='Create Post'
                action = {createHandler}
            />
        </div>
    ); 
};

export default SideManue;