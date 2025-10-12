import { Routes, Route, Navigate } from "react-router";
import BookList from "./pages/BookList/Booklist";
import AddBook from "./pages/AddBook/AddBook";
import EditBook from "./pages/EditBook/EditBook";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />}></Route>

        <Route path="/books" element={<BookList />}></Route>
        <Route path="/add" element={<AddBook />}></Route>
        <Route path="/edit/:id" element={<EditBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
