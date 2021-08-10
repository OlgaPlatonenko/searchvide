import { RouterView } from '../../Router';
import { NavLink } from 'react-router-dom'; 
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.container}>
           <div className={styles.menucontainer}>
               <ul className={styles.menuWrapper}>
                   <div className={styles.menuleft}>
                     <li className={styles.menuitem}>
                     <NavLink to='/'>Поиск</NavLink> </li>
                     <li className={styles.menuitem}>
                     <NavLink to='/favourite'>Избранное</NavLink> 
                     </li>
                   </div>
                   <li className={styles.menuright}>Выйти</li>
               </ul>
           </div>
           
        </div>
    );
}

export default Header;