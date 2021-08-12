import { useSelector } from 'react-redux';
import VideoListTitle from './VideoListTitle';
import styles from './VideoListTable.module.css';

function VideoListTable() {

  const videos = useSelector((state) => state.videostore.videos);
  
 
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
                    <div className={styles.videobox}> 
                    <iframe
                      title={id}
                      src={`https://www.youtube.com/embed/${id.videoId}`}></iframe>
</div>
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

export default VideoListTable;