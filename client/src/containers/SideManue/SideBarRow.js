import { NavLink } from 'react-router-dom';

import styles from './sideManue.module.css';

const SideBarRow = ({ title, Icon, link }) => {
    return (
        <NavLink 
            to={link} 
            className={styles.sideManue_row}  
            style={({ isActive }) => (isActive ? 
                {color: '#ae29d3', borderLeft: 'solid 5px #ae29d3' } : 
                {color: 'black'}
                )} 
        >
            {Icon && <Icon />}
            <h3> {title} </h3>
        </NavLink>
    );
};

export default SideBarRow;