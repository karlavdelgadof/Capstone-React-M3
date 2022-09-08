import { Route, Routes } from 'react-router-dom';
import CollectionDetails from './components/CollectionDetails';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<CollectionDetails />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
