import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVideo } from '../api/apiGetVideo';
import apiGetVideo from '../api/apiGetVideo';

export const getVideoThunk = createAsyncThunk(
  'video/getVideo',
  async () => {
    try {
      const response = await apiGetVideo.get('/search', {
        params: {
            q: 'звездные войны'
        }
    })
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
  },

  reducers: {
    addVideos(state, action) {
      state.videos = action.payload;
     console.log(state.status);
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
    },
  },
},

);

export const {
  addVideos,
 
} = videoSlice.actions;

export default videoSlice.reducer;
