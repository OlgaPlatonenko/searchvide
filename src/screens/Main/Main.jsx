//import { getFilmsList } from '../../api/apigGetVideo';
import { useEffect } from 'react';
import apiGetVideo from '../../api/apiGetVideo';
import { Search, VideoList, Header, VideoListTable } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { SaveQuery } from '../SaveQuery/SaveQuery';
import {
  getVideoThunk,
  addVideos,
} from '../../store/videoSlice';

import styles from './Main.module.css'

export function Main() {

  const reduxDispatch = useDispatch();

  const arrVideoList = useSelector((state) => state.videostore.videos);
  const status = useSelector((state) => state.videostore.status);
  const searchingString = useSelector((state) => state.videostore.searchingString);
  const isShowModal = useSelector((state) => state.videostore.isShowModal);
  const isList = useSelector((state) => state.videostore.isList);
  const isTable = useSelector((state) => state.videostore.isTable);


  return (
    <div >
      <Header />
      <div className={styles.containerMain}>
        <Search />
        {(status === 'fullfiled') && (isList) ? <VideoList /> : (
          (status === 'fullfiled') && (isTable) ? <VideoListTable /> : null
        )}
      </div>
      <div>
        {isShowModal ? <SaveQuery /> : null}

      </div>
    </div>
  );
}

export default Main;

/*  {status==='fullfiled' ? (<VideoList/>) : null }*/