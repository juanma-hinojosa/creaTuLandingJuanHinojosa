import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />

        <Route path='/category/:type' element={<ItemListContainer />} />

        <Route path='*' element={<Error />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
