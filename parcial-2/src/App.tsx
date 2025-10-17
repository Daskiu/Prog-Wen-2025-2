import { BrowserRouter as Router, Routes, Route } from 'react-router'
import CommentList from "./pages/CommentList/CommentList"
import AddComment from "./pages/AddComment/AddComment"
import FavoriteComments from "./pages/FavoriteComments/FavoriteComments"
import EditComment from "./pages/EditComment/EditComment"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CommentList />} />
          <Route path='/edit' element={<AddComment/>}/>
          <Route path="/favorites" element={<FavoriteComments />} />
          <Route path="/edit/:id" element={<EditComment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
