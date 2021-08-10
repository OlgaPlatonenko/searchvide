import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVideo } from '../api/apiGetVideo';
import apiGetVideo from '../api/apiGetVideo';


export const getVideoThunk = createAsyncThunk(
  'video/getVideo',
  async (str) => {
    try {      
      const response = await apiGetVideo.get('/search', {
        params: {
            q: str,
        }
    })
    console.log(response.data);
    const videos = response.data.items; 
    return videos;
    } catch(err) {
      return err;
    }
  },
);

const videoSlice = createSlice({
  name: 'video',

  initialState: {
    videos: [],
    status: null,
    searchingString: null,
    isShowModal: false,
    querySaved:{
      nameOfQuery:'',
      textOfQuery:'',
      sortByOfQuery:null,
    },
    allQueries: [],
   },

  reducers: {
    addVideos(state, action) {
      state.videos = action.payload;
    },    

    addQueries(state, action) {
      state.allQueries.push(action.payload);
    },  

    addQueriesReload(state, action) {
      state.allQueries=action.payload;
    }, 

    inputSearch(state, action){
      state.searchingString = action.payload;
    },

    inputSearchNull(state, action){
      state.searchingString = '';
    },

    setModalShow(state, action){
      state.isShowModal = true;
    },   

    setModalClose(state, action){
      state.isShowModal = false;
    },

    inputTextSearch(state, action){
      state.querySaved.textOfQuery = action.payload;
    },    

    inputNameSearch(state, action){
      state.querySaved.nameOfQuery = action.payload;
    },    

  },

  extraReducers: {
    [getVideoThunk.pending]: (state) => {
      state.status = 'pending';    
    },
    [getVideoThunk.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [getVideoThunk.fulfilled]: (state, action) => {
      state.status = 'fullfiled';
      state.videos = action.payload;
      console.log(action.payload);
    },
  },
},

);

export const {
  addVideos,
  inputSearch,
  setModalShow,
  setModalClose,
  inputTextSearch,
  inputNameSearch,
  addQueries,
  inputSearchNull,
  addQueriesReload,
} = videoSlice.actions;

export default videoSlice.reducer;
