import { useDispatch, useSelector } from 'react-redux';

import styles from './VideoList.module.css';

function VideoList(){

    const videos = useSelector((state) => state.videostore.videos);
    
    return(
        <div>
            <h2>VideoList</h2>            
            <ul >
              {
                videos.map(({ snippet, id }, index) => {
                  return (
                    <div className={styles.videoitem}>
                    <li
                      key={index}>
                    <div>
                        <img src={snippet.thumbnails.default.url} alt="" />
                    </div>
                    <iframe  
                      title={id}
                      src={`https://www.youtube.com/embed/${id.videoId}`}></iframe>
                     <div>
                         {snippet.publishTime}
                     </div>
                      <h4>{snippet.title}</h4>
                                    
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