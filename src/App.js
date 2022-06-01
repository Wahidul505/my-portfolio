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
      className='bg-neutral-900 text-white h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
