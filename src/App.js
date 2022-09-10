import { Route, Routes } from 'react-router-dom';
import CollectionDetails from './pages/CollectionDetails';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CollectionDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
