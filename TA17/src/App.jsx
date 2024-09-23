import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import { Home, About, Contact } from './components/Route';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
