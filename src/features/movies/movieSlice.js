import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:[]
}
const moviesSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.movies=action.playload;
        }
    }
})
export const {setMovies}=moviesSlice.actions;
export const seletMovies=(state)=>state.movie.movies;
export default moviesSlice.reducer;