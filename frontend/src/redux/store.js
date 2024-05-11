import {configureStore} from "@reduxjs/toolkit"
import booksReducer from "./slices/BookSlice";
import sliceFilter from "./slices/sliceFilter"
import errorReducer from "./slices/errorSlise";
const store = configureStore({
    reducer:{
        books:booksReducer,
        filter:sliceFilter,
        error:errorReducer,
    },
    
})
export default store;