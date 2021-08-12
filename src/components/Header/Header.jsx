import { RouterView } from '../../Router';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../icons/logo.png';

function Header() {
    return (
        <div className={styles.container}>

            <div className={styles.menucontainer}>

                <ul className={styles.menuWrapper}>
                    <div className={styles.menuleft}>

                        <li className={styles.menuitem}>
                            <NavLink to='/' className={styles.menulink}>
                                <div className={styles.logo}><img src={logo} alt="" /></div>
                            </NavLink> </li>
                        <li className={styles.menuitem}>
                            <NavLink to='/' className={styles.menulink}>Поиск</NavLink> </li>
                        <li className={styles.menuitem}>
                            <NavLink to='/favourite' className={styles.menulink}>Избранное</NavLink>
                        </li>
                    </div>
                    <li className={styles.menuright}>Выйти</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;