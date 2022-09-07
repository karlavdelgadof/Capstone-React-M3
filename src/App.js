import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Collections from './pages/Collections';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Collections" element={<Collections />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
