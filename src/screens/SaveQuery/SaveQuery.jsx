import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputTextSearch, inputNameSearch, addQueries, setModalClose, inputSearchNull } from '../../store/videoSlice';

import styles from './SaveQuery.module.css';

export function SaveQuery() {
    const reduxDispatch = useDispatch();

    const queryName = useSelector((state) => state.videostore.querySaved.nameOfQuery);
    const queryText = useSelector((state) => state.videostore.querySaved.textOfQuery);
    const querySort = useSelector((state) => state.videostore.querySaved.sortByOfQuery);
    
    const searchingString = useSelector((state) => state.videostore.searchingString);
    const isShowModal = useSelector((state) => state.videostore.isShowModal);
    // const currentQuery = useSelector((state) => state.videostore.querySaved.textOfQuery);  

    const handleSaveQuery = () => {
        const obj = {
            nameOfQuery: queryName,
            textOfQuery: queryText,
            sortOfQuery: querySort,
        }
        reduxDispatch(addQueries(obj));
        reduxDispatch(setModalClose());
        reduxDispatch(inputSearchNull());
    }

    const handleTextInput = (stringText) => {
        reduxDispatch(inputTextSearch(stringText));
    }
    const handleNameInput = (stringName) => {
        reduxDispatch(inputNameSearch(stringName));
    }
 
    return (
        <div>
            <div className={styles.hystmodal}>
                <div className={styles.hystmodalwindow}>
                    <div className={styles.titlemodal}>
                        <div className={styles.titlemodaltext}>Сохранить запрос</div>
                    </div>
                    <div className={styles.hystmodalcontent}>
                        <div className={styles.hystmodalitem}>
                            <label
                                htmlFor='query'
                                className={styles.labelpost}>Запрос </label>
                            <input
                                type='text'
                                placeholder='чем кормить кота...'
                                id='query'
                                value={searchingString}
                                disabled="true"
                                onChange={(e) => handleTextInput(e.target.value)}
                                className={styles.inputpost}
                            >
                            </input>
                        </div>
                        <div className={styles.hystmodalitem}>
                            <label
                                htmlFor='name'
                                className={styles.labelpost}>Название: </label>
                            <input
                                type='text'
                                form='savequery'
                                placeholder='Укажите название...'
                                id='name'
                                onChange={(e) => handleNameInput(e.target.value)}
                                className={styles.inputpost}
                            >
                            </input>
                        </div>
                        <div className={styles.hystmodalitem}>
                            <label
                                htmlFor='sortBy'
                                className={styles.labelpost}>Сортировать по </label>
                            <input
                                type='text'
                                placeholder='Без сортировки...'
                                id='sortBy'
                                className={styles.inputpost}
                            >
                            </input>
                        </div>

                    </div>
                    <button className={styles.btnPost} onClick={handleSaveQuery} >Сохранить</button>
                    <button className={styles.btnPost} onClick={() => { reduxDispatch(setModalClose()) }}>Не сохранять</button>

                </div>

            </div>
            <div className={styles.hystmodalshadow}></div>
        </div>
    );
}

export default SaveQuery;