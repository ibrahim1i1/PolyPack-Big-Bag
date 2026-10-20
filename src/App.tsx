
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';


import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LanguageProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/urun/:slug" element={<ProductDetail />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>

        <Footer />
        <FloatingButtons />
    </LanguageProvider>
  );
}