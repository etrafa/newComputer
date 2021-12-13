import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HomePage from "./Homepage/HomePage";
import Footer from "./Footer/Footer";
import ManUnitedSales from "./Pages/ManUnitedSales";
import ArsenalSales from "./Pages/ArsenalSales";
import LiverpoolSales from "./Pages/LiverpoolSales";
import ManCitySales from "./Pages/ManCitySales";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/liverpool-sales" element={<LiverpoolSales />}></Route>
          <Route path="/mancity-sales" element={<ManCitySales />}></Route>
          <Route path="/manunited-sales" element={<ManUnitedSales />}></Route>
          <Route path="/arsenal-sales" element={<ArsenalSales />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
