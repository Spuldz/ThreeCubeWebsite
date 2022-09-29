import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import AboutUsPage from "./pages/AboutUsPage";
<<<<<<< HEAD
import SmarttoysPage from "./pages/SmarttoysPage";
=======
>>>>>>> f4d846a6ab9b9f70242a2895f2f0afde5f7d10a5

function App() {
  const navigate = useNavigate();

  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage/>}/>
<<<<<<< HEAD
        <Route path="/toys" element={<SmarttoysPage/>}/>
=======
>>>>>>> f4d846a6ab9b9f70242a2895f2f0afde5f7d10a5
      </Routes>
 
    </>
  );
 
}

export default App;
