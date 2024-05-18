import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyAddress = () => {
    const address = "0x98Fc4B17F5Ca08642F15A12D6D18bb791a749327";
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy address: ", error);
      });
  };

  return (
    <>
      <div className="container-fluid homeBg" id="action_home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="homeH1">
                DECENTRALIZED CRYPTOCURRENCY IS PRODUCED.
              </h2>
              <p className="homeP">
                Cryptocurrency has revolutionized the financial landscape,
                offering decentralized and secure transactions. As the crypto
                industry evolves, new technologies are emerging to enhance its
                capabilities.
              </p>

              <h5 className="mt-5">Contract Addrss : 0x98Fc4B17F5Ca08642F15A12D6D18bb791a749327</h5>
              <button className="homeBtn" onClick={handleCopyAddress}>
                Copy Address
              </button>
              {showPopup && (
                <div className="popup">Contract Address Copied</div>
              )}
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}
