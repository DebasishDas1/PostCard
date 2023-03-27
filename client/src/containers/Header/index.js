import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderProfile from './HeaderProfile';

import styles from './header.module.css';

const Header = () => {
    return (
        <div className = {styles.header} >
            <HeaderLogo />
            <HeaderSearch />
            <HeaderProfile />
        </div>
    );
};

export default Header;