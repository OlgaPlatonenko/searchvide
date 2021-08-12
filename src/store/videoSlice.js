import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    const videos = response.data;    
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
    total: 0,
    isList: true,
    isTable: false,
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

    /*isShowHow(state, action){
      state.isList = !state.isList;
      state.isTable =!state.isTable;
    },*/

    isShowListTrue(state, action){
      state.isList = true;
      state.isTable = false;
     },

     isShowListFalse(state, action){
      state.isList = false;
      state.isTable = true;
     },

     isShowTableTrue(state, action){
      state.isList = false;
      state.isTable = true;
     },

     isShowTableFalse(state, action){
      state.isList = true;
      state.isTable = false;
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
      state.videos = action.payload.items;      
      state.total =  action.payload.pageInfo.totalResults;  
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
  isShowListTrue,
  isShowListFalse,
  isShowTableTrue,
  isShowTableFalse,
} = videoSlice.actions;

export default videoSlice.reducer;
