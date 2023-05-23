import './styles/main.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;