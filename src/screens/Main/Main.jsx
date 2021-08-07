//import { getFilmsList } from '../../api/apigGetVideo';
import { useEffect } from 'react';
import apiGetVideo from '../../api/apiGetVideo';
import { Search, VideoList } from '../../components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    getVideoThunk,
    addVideos,
} from '../../store/videoSlice';

export function Main(){

    const reduxDispatch = useDispatch();

    const arrVideoList = useSelector((state) => state.videostore.videos);
console.log(arrVideoList);
  /*
const handleSubmit = async () => {
    const response = await apiGetVideo.get('/search', {
        params: {
            q: 'москва слезам не верит'
        }
    })
    const videos = response.data.items; 
    reduxDispatch(addVideos(videos));
    console.log(videos);
}
  */
useEffect(() => {
    reduxDispatch(getVideoThunk());
  },[reduxDispatch]);

/*  const handleSubmit = () => {
reduxDispatch(addPosts());
  }*/

    return(
        <div>
            <button >OK</button>
          
          <ul>
              {arrVideoList.map(() =>{})}
          </ul>
           <h2>main</h2>
           <Search />
           <VideoList />
        </div>
    );
}

export default Main;