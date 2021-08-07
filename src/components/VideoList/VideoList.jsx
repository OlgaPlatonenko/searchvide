import { useDispatch, useSelector } from 'react-redux';

function VideoList(){

    const videos = useSelector((state) => state.videostore.videos);
    console.log(videos[0].snippet.title);
    return(
        <div>
            <h2>VideoList</h2>
            <ul >
              {
                videos.map(({ snippet, id }, index) => {
                  return (
                    <li
                      key={index}>
                     
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