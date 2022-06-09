import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';
import Works from './Pages/Works/Works';

function App() {
  return (
    <div
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      className='bg-base-100 text-white h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
