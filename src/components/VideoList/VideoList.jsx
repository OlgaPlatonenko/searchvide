import { useDispatch, useSelector } from 'react-redux';

function VideoList(){

    const videos = useSelector((state) => state.videostore.videos);
    
    return(
        <div>
            <h2>VideoList</h2>
            
            <ul >
              {
                videos.map(({ snippet, id }, index) => {
                  return (
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
                  );
                })
              }
            </ul>
           
        </div>
    );
}

export default VideoList;