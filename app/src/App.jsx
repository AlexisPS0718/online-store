import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import ShoppingList from './pages/ShoppingList';
import About from './pages/About';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/about' element={<About />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/list' element={<ShoppingList />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;