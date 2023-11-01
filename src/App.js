import { Toaster } from "react-hot-toast";
import Navbar from "./Components/view/Navbar";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <Navbar />
      <Home />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
