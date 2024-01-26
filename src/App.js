import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div>
      {' '}
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/kids" element={<ShopCategory category="kids" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>{' '}
      </ShopContextProvider>
    </div>
  );
}

export default App;
