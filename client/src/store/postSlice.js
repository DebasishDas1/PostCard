import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const url = 'http://localhost:5000';

const initialState = {
  posts: [],
  status: 'idle', // idle | loading | successed | failed 
  error: null 
}

export const createPostApi = createAsyncThunk( 'users/fetchById', async ( newPost ) => {
  try {
      const response = await axios.post(`${url}/post/create`, newPost);
      const data = await response.data;
      console.log(data);
  } 
  catch (error) {
      return error.message;
  }
});

export const getPostApi = createAsyncThunk( 'users/fetchByIdStatus', async () => {
  try {
      const { data } = await axios.get(`${url}/post/all`);

      return [ ...data ]
  } catch (error) {
          return error.message;
  }
});

export const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createPost: (state, action) => {
        console.log( action.payload );
    },
    deletePost: (state, action) => {
        state.value += action.payload
    },
    updatePost: (state, action) => {
        state.value += action.payload
    },
    getPost: (state, action) => {
      console.log('yo');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostApi.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(getPostApi.fulfilled, (state, action) => {
            state.status = 'successed';
            
            state.posts = [ ...state.posts, ...action.payload ];
            console.log('from slice : ', state.posts);
          })
          .addCase(getPostApi.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
  },
})

// Action creators are generated for each case reducer function
export const { createPost, deletePost, updatePost, getPost } = postSlice.actions

export default postSlice.reducer