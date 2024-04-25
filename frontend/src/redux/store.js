import {configureStore} from "@reduxjs/toolkit"
import booksReducer from "./books/reducer";
import sliceFilter from "./slices/sliceFilter"
const store = configureStore({
    reducer:{
        books:booksReducer,
        filter:sliceFilter,
    },
    
})
export default store;