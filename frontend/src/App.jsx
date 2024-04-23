import "./App.css";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book</h1>
        <main className="app-main">
          <div className="app-left-column">
            <BookForm />
          </div>
          <div className="app-right-column">
            <Filter />

            <BookList />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
