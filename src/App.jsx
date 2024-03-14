import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
          <Route path="/" element={<Main />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
