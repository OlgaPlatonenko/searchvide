import { useDispatch, useSelector } from 'react-redux';
import { inputSearch, getVideoThunk, setModalShow, addQueriesReload } from '../../store/videoSlice';

import styles from './Search.module.css';

function Search() {

    const reduxDispatch = useDispatch();
    const searchingString = useSelector((state) => state.videostore.searchingString);

    const handleSearchInput = (stringSearching) => {
        reduxDispatch(inputSearch(stringSearching));
    }

    const handleSearch = () => {
        reduxDispatch(getVideoThunk(searchingString));
    }

    //чтобы после обновления страницы и обновления state не перезаписывался localstorage
    //делаем проверку. если было обновление и state пустой читаем его из localstorage,
    //и обновляем не пустым значением из slice а считанным из localstorage значением
    //то есть сохраняем предыдущие сохраненные запросы
    //иначе просто пишем в localstorage массив запросов

    if (localStorage.getItem('savedquery') === null) {
        reduxDispatch(addQueriesReload([].concat({
            nameOfQuery: '',
            textOfQuery: '',
            sortByOfQuery: null,
        })));
    }
    let allQueries = useSelector((state) => state.videostore.allQueries);
    if (allQueries.length === 0) {
        reduxDispatch(addQueriesReload(JSON.parse(localStorage.getItem('savedquery'))));
    } else {
        localStorage.setItem('savedquery', JSON.stringify(allQueries))
    };

    return (
        <div className={styles.searchwrapper}>
            <div className={styles.searchTitle}>Поиск видео</div>
            <div className={styles.searchContainer}>
                <form className={styles.formSearch}>
                    <input
                        placeholder='Что хотите посмотреть?...'
                        value={searchingString}
                        onChange={(e) => handleSearchInput(e.target.value)}
                        className={styles.formSearchinput}></input>

                </form>
                <button
                    onClick={handleSearch}
                    className={styles.searchBtn}
                >
                    Найти
                </button>
                
                <div
                    onClick={() => reduxDispatch(setModalShow())}
                    className={styles.savebtn}
                ><i class="fa fa-heart-o fa-2x " aria-hidden="true"></i>
                </div>
            </div>

        </div>
    );
}

export default Search;