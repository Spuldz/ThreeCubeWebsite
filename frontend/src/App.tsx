import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  const navigate = useNavigate();

  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage/>}/>
      </Routes>
 
    </>
  );
 
}

export default App;
