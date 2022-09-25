import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import AboutUsPage from "./pages/AboutUsPage";
import SmarttoysPage from "./pages/SmarttoysPage";

function App() {
  const navigate = useNavigate();

  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/toys" element={<SmarttoysPage/>}/>
      </Routes>
 
    </>
  );
 
}

export default App;
