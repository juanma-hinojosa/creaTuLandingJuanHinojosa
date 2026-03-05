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
import CartContainer from './components/Cart/CartContainer'
import { CartProvider } from './context/CartContext'
import { SkeletonTheme } from 'react-loading-skeleton'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        <SkeletonTheme baseColor="#d3d3d3" highlightColor="#9b9999">

          <ToastContainer position="top-right" autoClose={2000} />
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/admin' element={<AdminPage />} />

            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:type' element={<ItemListContainer />} />

            <Route path='/cart' element={<CartContainer />} />

            <Route path='*' element={<Error />} />
          </Routes>

        </SkeletonTheme>
      </CartProvider>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
