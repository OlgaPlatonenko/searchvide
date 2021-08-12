import { useDispatch, useSelector } from 'react-redux';
import { apiGetVideoStat } from '../../api/apiGetVideo';
import VideoListTitle from './VideoListTitle';
import styles from './VideoList.module.css';
import axios from "axios";

function VideoList() {

  const videos = useSelector((state) => state.videostore.videos);
  const query = useSelector((state) => state.videostore.searchingString);
  const total = useSelector((state) => state.videostore.total);
  
  /*let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=N0QblwXyXvo&key=AIzaSyBw00rbu07aXzi_-_uNqvohVEJBkD-YDSY`;
  let response = await fetch(url);
  
  let commits = await response.json(); // читаем ответ в формате JSON*/

  /*const myapi = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=N0QblwXyXvo&key=AIzaSyBw00rbu07aXzi_-_uNqvohVEJBkD-YDSY`,
    params: {
        part: 'statistic',
        key: 'AIzaSyBw00rbu07aXzi_-_uNqvohVEJBkD-YDSY',
    }
  });
  let response=myapi.get();
  console.log(response);*/

  return (
    <div className={styles.listwrapper}>

<VideoListTitle />

      

      <ul className={styles.listvideos}>
        {
          videos.map(({ snippet, id }, index) => {
            return (
              <div className={styles.videoitem}>
                <li
                  key={index}>

                  <div className={styles.videoconainer}>
                    <iframe
                      title={id}
                      src={`https://www.youtube.com/embed/${id.videoId}`}></iframe>

                    <div className={styles.aboutvideo}>
                      <div className={styles.videotitle}>{snippet.title}</div>
                      <div className={styles.videodescripton}>{snippet.description}</div>

                    </div>
                  </div>

                </li>
              </div>
            );
          })
        }
      </ul>

    </div>
  );
}

export default VideoList;