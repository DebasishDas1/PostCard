import logo from '../../asset/logo_1.png';

import styles from './header.module.css';

const HeaderLogo  = () => {
    return (
        <div className = {styles.header__logo} >
            <img src = {logo} alt = 'app logo' />
            PostCard
        </div>
    );
};

export default HeaderLogo;