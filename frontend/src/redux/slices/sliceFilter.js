import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    title: "",
    author:"",
    onlyFavorite:false,
}
const sliceFilter = createSlice({
    name:"filter",
    initialState,
    reducers:{
        setTitleFilter: (state, action)=>{
            state.title = action.payload
        },
        resetFilters:()=> { return initialState},

        setAuthorFilter:(state, action)=>{
            state.author=action.payload
        },
        setOnlyFavoriteFilter:(state )=>{
            state.onlyFavorite = !state.onlyFavorite
        },


    }
})
export const {setTitleFilter, resetFilters, setAuthorFilter, setOnlyFavoriteFilter} = sliceFilter.actions;
export const selectTitleFilter = ((state)=> state.filter.title)
export const selectOnlyFavoriteFilter = (state) =>state.filter.onlyFavorite
export const selectAuthorFilter = ((state)=> state.filter.author)
export default sliceFilter.reducer
