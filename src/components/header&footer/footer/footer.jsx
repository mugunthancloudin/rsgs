import React from 'react';
import "./footer.css";
import logo from "../../../assets/nav/Logo.png"

export default function Footer() {
  return (
    <>
      <div className="container-fluid footerBg">
    <div className="container p-5 text-white pb-4">
        <div className="row pt-5 pb-5">
          <div className="d-lg-flex pt-5 justify-content-center">
            <div className="col-lg-6  text-lg-center ">
              <h3 className="fw-bold">Receive transmissions</h3>
              <p>Unsubscribe at any time. Privacy policy↗</p>
            </div>
            <div className="col-lg-6 ">
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-control email-input w-100"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-5" />
        <div className="row text-center ">
          <div className="col-lg-3 align-items-center justify-content-center d-flex">

          <img
              src={logo}
              width="125"
              height="125"
              className="d-inline-block align-top"
              alt="Logo"
            />

            {/* <h4 className="fw-bold mt-3">Products & Solutions</h4>
            <p className="mt-5">Cosmos SDK</p>
            <p>CometBFT</p>
            <p>IBC Protocol</p>
            <p>CosmWasm</p> */}
          </div>

          <div className="col-lg-3 mt-3">
            <h4 className="fw-bold">Developers</h4>
            <p className="mt-5">Tutorials</p>
            <p>Developer Academy</p>
            <p>Builders Program</p>
            <p>FAQ</p>
          </div>

          <div className="col-lg-3 mt-3">
            <h4 className="fw-bold">EcoSystem</h4>
            <p className="mt-5">Wallets</p>
            <p>Validators </p>
            <p>Case Studies</p>
            <p>Whitepaper</p>
          </div>

          <div className="col-lg-3 mt-3">
            <h4 className="fw-bold">Resourses</h4>
            <p className="mt-5">About</p>
            <p>Contact</p>
            <p>Press Kit</p>
            <p>Blog</p>
          </div>
        </div>
        
      </div>

    </div>
    </>
  )
}
