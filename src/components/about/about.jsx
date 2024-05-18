import React from "react";
import "./about.css";
import cryptoCoin from "../../assets/about/Cryptocurrency.png";
import rocket from "../../assets/about/rocket.png";


export default function About() {
  return (
    <>
      <div className="container-fluid aboutBg" id="action_about">
        <div className="container">
          <div className="row pb-3">
            <div className="col-lg-6">
              <h1 className="aboutH1">About RAGS & its Future</h1>
              <p className="aboutP">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <p className="aboutP">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="col-lg-6 text-center d-flex justify-content-center align-content-center">
            <img src={rocket} alt="cryptoCoin" className="aboutRocketImg" />

            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <img src={cryptoCoin} alt="cryptoCoin" className="aboutImg" />
            </div>

            <div className="col-lg-6 p-3">
              <h1 className="aboutH1">
                Cryptocurrency has revolutionized the financial landscape
              </h1>
              <p className="aboutP">
                Cryptocurrency has revolutionized the financial landscape,
                offering decentralized and secure transactions. As the crypto
                industry evolves, new technologies are emerging to enhance its
                capabilities. One such technology is hybrid intelligence, which
                combines the power of artificial intelligence (AI) with
                Blockchain technology. In this article, we will explore the
                concept of hybrid crypto and its potential to shape the future
                of the cryptocurrency market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
