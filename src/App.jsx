
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import TrekDetails from './Pages/TrekDetails';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery'
import BaseHeader from './components/BaseHeader';
import Tour from './components/Tour';






function RouterContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <BaseHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/tour" element={<Tour/>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trek/:id" element={<TrekDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
function App() {


  return (
    <>
       <BrowserRouter>
      <RouterContent />
    </BrowserRouter>

    </>
  )
}

export default App
