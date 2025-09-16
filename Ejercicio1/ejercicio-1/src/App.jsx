import './App.css'
import { UserProvider } from './contexts/UserContext.jsx'
import Header from "./components/Header/Header"
import Input from "./components/Input/Input";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <UserProvider>
        <Header/>
        <Input/>
        <Profile/>
        <Footer/>
      </UserProvider>
    </>
  )
}

export default App