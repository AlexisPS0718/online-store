import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;