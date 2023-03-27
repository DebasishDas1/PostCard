import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import styles from './header.module.css';

const HeaderSearch = () => {
    const [search, setSearch] = useState('');

    return (
        <div className = {styles.header__search} >
            <SearchIcon />
            <input
                placeholder='Search the card'
                value = {search}
                onChange = { e => setSearch(e.target.value) }
            />
        </div>
    );
};

export default HeaderSearch;