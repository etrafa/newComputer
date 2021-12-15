import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import HomePage from "./Homepage/HomePage";
import Footer from "./Footer/Footer";
import ManUnitedSales from "./Pages/ManUnitedSales";
import ArsenalSales from "./Pages/ArsenalSales";
import LiverpoolSales from "./Pages/LiverpoolSales";
import ManCitySales from "./Pages/ManCitySales";
import AjaxTshirtThird from "./BestSellers/Ajax-tshirt-third";
import LionelTshirtAway from "./BestSellers/Lionel-tshirt-away";
import LionelTshirtHome from "./BestSellers/Lionel-tshirt-home";
import BarcelonaTshirtAway from "./BestSellers/Barcelona-tshirt-away";
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
import FaqHelp from "./Footer/Faq-help";
import Shipping from "./Footer/Shipping";
import ReturnPolicy from "./Footer/ReturnPolicy";
import PaymentMethod from "./Footer/PaymentMehdod";
import NationalTeam from "./Leauges/NationalTeam";
import PremierLeauge from "./Leauges/PremierLeauge";
import BundesLiga from "./Leauges/BundesLiga";
import LaLiga from "./Leauges/LaLiga";
import LeaugeOne from "./Leauges/LeuageOne";
import OtherClub from "./Leauges/OtherClub";
import ScrollToTop from "./ScrollToTop";
import MexicoShirt from "./Leauges/MexicoShirt";
import BrazilHome from "./Leauges/BrazilHome";
import BrazilAway from "./Leauges/BrazilAway";
import ColombiaAway from "./Leauges/ColombiaAway";
import ArgentinaAway from "./Leauges/ArgentinaAway";
import ArgentinaHome from "./Leauges/ArgentinaHome";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/liverpool-sales" element={<LiverpoolSales />} />
          <Route path="/mancity-sales" element={<ManCitySales />} />
          <Route path="/manunited-sales" element={<ManUnitedSales />} />
          <Route path="/arsenal-sales" element={<ArsenalSales />} />
          <Route
            path="/ajax-tshirt-21/22-third"
            element={<AjaxTshirtThird />}
          />
          <Route
            path="psg/lionel_messi-21/22-away"
            element={<LionelTshirtAway />}
          />
          <Route
            path="psg/lionel_messi-21/22-home"
            element={<LionelTshirtHome />}
          />
          <Route
            path="barcelona-tshirt-21/22-away"
            element={<BarcelonaTshirtAway />}
          />
          <Route
            path="manunited-tshirt-21/22-home"
            element={<ManUnitedTshirtHome />}
          />
          <Route
            path="intermilan-tshirt-21/22-home"
            element={<InterMilanTshirtHome />}
          />
          <Route
            path="bayern-munich-tshirt-21/22-away"
            element={<BayernMunichTshirtAway />}
          />
          <Route path="psg-tshirt-21/22-home" element={<PsgTshirtHome />} />
          <Route
            path="chelsea-tshirt-21/22-home"
            element={<ChelseaTshirtHome />}
          />
          <Route
            path="tottenham-tshirt-21/22-away"
            element={<TottenhamTshirtAway />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/delivery-guarantee" element={<Delivery />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/size-chart" element={<SizeChart />} />
          <Route path="/faq-help" element={<FaqHelp />} />
          <Route path="/shipping-delivery" element={<Shipping />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/national-team" element={<NationalTeam />} />
          <Route path="/premier-leauge" element={<PremierLeauge />} />
          <Route path="/bundesliga" element={<BundesLiga />} />
          <Route path="/laliga-leauge" element={<LaLiga />} />
          <Route path="/ligue-one" element={<LeaugeOne />} />
          <Route path="/other-clubs" element={<OtherClub />} />
          <Route path="/mexico-tshirt-21/22-home" element={<MexicoShirt />} />
          <Route path="/brazil-tshirt-21/22-home" element={<BrazilHome />} />
          <Route path="/brazil-tshirt-21/22-away" element={<BrazilAway />} />
          <Route
            path="/colombia-tshirt-21/22-home"
            element={<ColombiaAway />}
          />
          <Route
            path="/argentina-tshirt-21/22-away"
            element={<ArgentinaAway />}
          />
          <Route
            path="/argentina-tshirt-21/22-home"
            element={<ArgentinaHome />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
