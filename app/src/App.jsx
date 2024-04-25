import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Header from './components/Header';
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Catalog />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;