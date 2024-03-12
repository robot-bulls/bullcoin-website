
import React from "react";
import etherum from "../../assets/img/png-transparent-ethereum-eth-hd-logo-thumbnail.png"

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>

        <div className="brand">
          <h1 className="h1-seo">BullCoin: Decentralize trading robots</h1>
          <h3 >
            Transforming Meme Communities into Marketing Titans! Create, Sell, and Dominate with Unique NFTs on Our Exclusive Marketplace – Your Gateway to Fun, Engagement, and Profit!
          </h3>
        </div>

        <div className="ethImg d-none d-lg-block d-xl-block">
          <img src={etherum} alt="" />
        </div>

      </Container>
    </div>
  );
}
