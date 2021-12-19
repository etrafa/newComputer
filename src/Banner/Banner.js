import "./Banner.css";
import { useNavigate } from "react-router-dom";
import LiverpoolAsset from "./banner-asset/liverpool.png";
import ManCityAsset from "./banner-asset/mancity.png";
import ManUnitedAsset from "./banner-asset/manunited.png";
import ArsenalAsset from "./banner-asset/arsenal.png";

const Banner = () => {
  let navigate = useNavigate();
  return (
    <div className="banner__container">
      <img
        onClick={() => {
          navigate("./liverpool-sales");
        }}
        src={LiverpoolAsset}
        alt=""
      />
      <img
        onClick={() => {
          navigate("./mancity-sales");
        }}
        src={ManCityAsset}
        alt=""
      />

      <img
        onClick={() => {
          navigate("./manunited-sales");
        }}
        src={ManUnitedAsset}
        alt=""
      />
      <img
        onClick={() => {
          navigate("./arsenal-sales");
        }}
        src={ArsenalAsset}
        alt=""
      />
    </div>
  );
};

export default Banner;
