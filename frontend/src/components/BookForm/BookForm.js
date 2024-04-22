import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import "./BookForm.css"
export default function BookForm() {
    const [title, setTitle] =useState('')
    const [autor, setAutor] = useState('')
    const  dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(autor&& title){
            const book = {
                title,
                autor,
                
            }
            console.log(addBook(book))
            dispatch(addBook(book))
            console.log(title,autor)
            setAutor('')
            setTitle('')
        }
    }
  return (
    <div className="app-block book-form">
      <h2>ADD a New Book</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlForm = "title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div>
                <label htmlForm = "autor">Autor:</label>
                <input type="text" id="autor" value={autor} onChange={(e)=>setAutor(e.target.value)}></input>
            </div>
            <button type="submit ">Add Book</button>
        </form>
    </div>
  );
}
