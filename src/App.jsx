
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Profile from './pages/Profile';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;


