import { useSelector, useDispatch } from 'react-redux';
import styles from './VideoListTitle.module.css';
import {
    isShowListTrue,
    isShowListFalse,
    isShowTableTrue,
    isShowTableFalse,
} from '../../store/videoSlice';

export default function VideoListTable() {

    const query = useSelector((state) => state.videostore.searchingString);
    const total = useSelector((state) => state.videostore.total);

    const reduxDispatch = useDispatch();

    const handleIsShowList = () => {
        reduxDispatch(isShowListTrue());
        reduxDispatch(isShowTableFalse());
    }
    const handleIsShowTable = () => {
        reduxDispatch(isShowListFalse());
        reduxDispatch(isShowTableTrue());
    }

    return (
        <div>
            <div className={styles.listname}>
                <div className={styles.listnameleft}>
                    <div className={styles.listnametext}>Видео по запросу</div>
                    <div className={styles.listnamequery}>"{query}"</div>
                    <div className={styles.listnametotalcount}>{total}</div>
                </div>
                <div className={styles.listnameright}>
                    <div className={styles.listicons}>
                        <div onClick={handleIsShowList}> <i class="fa fa-list" aria-hidden="true"></i> </div>
                        <div onClick={handleIsShowTable}><i class="fa fa-table" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}