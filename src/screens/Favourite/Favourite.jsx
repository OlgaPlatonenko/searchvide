import { Header } from '../../components';
import styles from './Favourite.module.css';

function Favourite() {
    const arrSavedQueries = JSON.parse(localStorage.getItem('savedquery'));
    //  let arrTemp = [].concat(arrSavedQueries);
    // console.log(arrTemp);
    return (
        <div >
            <Header />
            <div className={styles.containerFav}>
                <h2>Избранное</h2>
                <div >
                    <ul className={styles.listfavourite}>
                        {arrSavedQueries.map((item, index) => {
                            return (
                                <li
                                    key={index}>
                                    <div>
                                        {item.nameOfQuery}
                                    </div>

                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Favourite;