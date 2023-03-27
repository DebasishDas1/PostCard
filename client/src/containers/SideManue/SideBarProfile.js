import Avatar from '@mui/material/Avatar';

import styles from './sideManue.module.css';

const SideBarProfile = () => {
    const name = 'SideBarProfile';

    return (
        <div className = {styles.sideManue_profile} >
            <Avatar />
            <h3> {name} </h3>
            {/* @{name} */}
        </div>
    );
};

export default SideBarProfile;