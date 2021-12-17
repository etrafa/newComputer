import "./Banner.css";
import { useNavigate } from "react-router-dom";
import LiverpoolAsset from "./banner-asset/liverpool.jpg";

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
        src="https://www.hnfootball.ru/media/mancity.png"
        alt=""
      />

      <img
        onClick={() => {
          navigate("./manunited-sales");
        }}
        src="https://www.hnfootball.ru/media/manunited.png"
        alt=""
      />
      <img
        onClick={() => {
          navigate("./arsenal-sales");
        }}
        src="https://www.hnfootball.ru/media/arsenal.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
