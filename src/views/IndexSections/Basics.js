import logo1 from "../../assets/img/logo/coingeckoWhiteLogo.png";
import logo2 from "../../assets/img/logo/SushiswapLogo.png";
import logo3 from "../../assets/img/logo/Uniswap_Logo.png";
import logo4 from "../../assets/img/logo/coinmarketcap-logo.png";
import Marquee from "react-fast-marquee";

export default function Basics() {

  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="marquee-container">
        <Marquee pauseOnHover >
          <div className="marquee">
            <div className="marquee-item">
              <img src={logo1} alt="" className="path2" />
              <h1 className="name">CoinGecko</h1>
            </div>
            <div className="marquee-item">
              <img src={logo2} alt="" className="path2" />
              <h1 className="name">Sushiswap</h1>
            </div>
            <div className="marquee-item">
              <img src={logo3} alt="" className="path2" />
              <h1 className="name">Uniswap</h1>
            </div>
            <div className="marquee-item">
              <img src={logo4} alt="" className="path2" />
              <h1 className="name">Coinmarketcap</h1>
            </div>
          </div>


        </Marquee>
      </div>
    </div>
  );
}
