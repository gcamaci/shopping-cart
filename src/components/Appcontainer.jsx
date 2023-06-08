import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "../pages/Home";
import Profile from '../pages/Profile';


const AppContainer = () => {
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
}

export default AppContainer