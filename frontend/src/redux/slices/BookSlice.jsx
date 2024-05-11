import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBooksWithId from "../../utils/createBooksWithId";
import axios from "axios";
const initialState = [];
export const fetcBook = createAsyncThunk(
  "books/fetchBook",
  async () =>{
    const res = await axios.get("http://localhost:4000/random-book");
    console.log(res.data)
    return res.data
  }

)
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(fetcBook.fulfilled, (state, action)=>{
      if(action.payload.title && action.payload.author){
          state.push(createBooksWithId(action.payload, "API"))
      }
    })
    builder.addCase(fetcBook.rejected,(state, action)=>{
      console.log(action)
    })
  }
});
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;
// export const thunkFunction = async (dispatch, getState) => {
//   try {
//     const res = await axios.get("http://localhost:4000/random-book");
//     dispatch(addBook(createBooksWithId(res.data, "API")));
//   } catch {
//     console.log("ERROR");
//   }
// };
export const selectBooks = (state) => state.books;
export default bookSlice.reducer;
