import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HomePage from "./Homepage/HomePage";
import Footer from "./Footer/Footer";
import ManUnitedSales from "./Pages/ManUnitedSales";
import ArsenalSales from "./Pages/ArsenalSales";
import LiverpoolSales from "./Pages/LiverpoolSales";
import ManCitySales from "./Pages/ManCitySales";
import BestSellers from "./BestSellers/BestSellers";
import AjaxTshirtThird from "./BestSellers/Ajax-tshirt-third";
import LionelTshirtAway from "./BestSellers/Lionel-tshirt-away";
import LionelTshirtHome from "./BestSellers/Lionel-tshirt-home";
import BarcelonaTshirtAway from "./BestSellers/Barcelona-tshirt-away";
import "./index.css";
import ManUnitedTshirtHome from "./BestSellers/ManUnited-tshirt-home";
import InterMilanTshirtHome from "./BestSellers/InterMilan-tshirt-home";
import BayernMunichTshirtAway from "./BestSellers/BayernMunichTshirtAway";
import PsgTshirtHome from "./BestSellers/Psg-tshirt-home";
import ChelseaTshirtHome from "./BestSellers/Chelsea-tshirt-home";
import TottenhamTshirtAway from "./BestSellers/Tottenham-tshirt-away";
import AboutUs from "./Footer/AboutUs";
import Delivery from "./Footer/Delivery";
import Privacy from "./Footer/Privacy";
import Terms from "./Footer/Terms";
import SizeChart from "./Footer/SizeChart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/liverpool-sales" element={<LiverpoolSales />}></Route>
          <Route path="/mancity-sales" element={<ManCitySales />}></Route>
          <Route path="/manunited-sales" element={<ManUnitedSales />}></Route>
          <Route path="/arsenal-sales" element={<ArsenalSales />}></Route>
          <Route
            path="/ajax-tshirt-21/22-third"
            element={<AjaxTshirtThird />}
          ></Route>
          <Route
            path="psg/lionel_messi-21/22-away"
            element={<LionelTshirtAway />}
          ></Route>
          <Route
            path="psg/lionel_messi-21/22-home"
            element={<LionelTshirtHome />}
          ></Route>
          <Route
            path="barcelona-tshirt-21/22-away"
            element={<BarcelonaTshirtAway />}
          ></Route>
          <Route
            path="manunited-tshirt-21/22-home"
            element={<ManUnitedTshirtHome />}
          ></Route>
          <Route
            path="intermilan-tshirt-21/22-home"
            element={<InterMilanTshirtHome />}
          ></Route>
          <Route
            path="bayern-munich-tshirt-21/22-away"
            element={<BayernMunichTshirtAway />}
          ></Route>
          <Route
            path="psg-tshirt-21/22-home"
            element={<PsgTshirtHome />}
          ></Route>
          <Route
            path="chelsea-tshirt-21/22-home"
            element={<ChelseaTshirtHome />}
          ></Route>
          <Route
            path="tottenham-tshirt-21/22-away"
            element={<TottenhamTshirtAway />}
          ></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/delivery-guarantee" element={<Delivery />}></Route>
          <Route path="/privacy-policy" element={<Privacy />}></Route>
          <Route path="/terms-of-use" element={<Terms />}></Route>
          <Route path="/size-chart" element={<SizeChart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
