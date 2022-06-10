import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      className='bg-base-100 text-white h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
