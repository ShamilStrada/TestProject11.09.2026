import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export const fetchFavourite=createAsyncThunk('favourite/fetchall',async()=>{
    const res = await fetch('https://api.themoviedb.org/3/account/${22187086}/favorite/movies')
    return res.json()
})
export const createPost= createAsyncThunk('favourite/add', async(idFilm, AddorDelete)=>{
    const res = await fetch('https://api.themoviedb.org/3/account/${22187086}/favorite/movies',{
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json', //не хватало этого контента
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk',
        },
        body: JSON.stringify(
          { media_type: 'movie', media_id: idFilm, favorite: AddorDelete } //а здесь была ошибка с понятием Json, и кавычками
          // `{ "media_type": "movie", "media_id": 1204680, "favorite": true }`,
        ),
    })
    return res.json()
})

interface Props{
    favourite:boolean;
    favouriteItems:[]
    loading:boolean,
    error:null|true
}
const UserLike:Props={
    favourite:false,
    favouriteItems:[],
    loading:false,
    error:null
}
const Favourite = createSlice({
    initialState:UserLike,
    name:'favourite',
    reducers:{
        clickButton:(state)=>{
            state.favourite=!state.favourite
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFavourite.fulfilled, (state,action)=>{
            state.favouriteItems=action.payload;
        })
    }
}