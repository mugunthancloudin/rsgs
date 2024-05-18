import React from "react";
import "./contact.css";
import twitter from "../../assets/contact/twitter.jpg";
import Medium from "../../assets/contact/medium.png";
import Telegram from "../../assets/contact/telegram.png";
import Discord from "../../assets/contact/twitter.jpg"
import rags from "../../assets/contact/RAGS.pdf"
import logos from "../../assets/contact/logos.png"

export default function Contact() {

  const handleDownload = () => {
    // Create a hidden anchor element
    const link = document.createElement("a");
    link.href = rags; // Set the href attribute to the path of your resume PDF file
    link.download = "white_paper.pdf"; // Specify the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <>
      <div className="container-fluid contactBg" id="action_contact">
        <div className="container">
          
          <div className="row ">
            <div className="col-lg-6">
              <h1 className="contactH1">RAGS WHITEPAPER </h1>
              <p className="contactP">
                We are in the process of partnering with corporations to allow
                merchants to pay rags across the world using several platforms,
                including hotels, ed tech, and ecommerce.
              </p>
              <div className="d-flex justify-content-center w-50">
              <button className="contactBtn" onClick={handleDownload}>WHITEPAPER</button>

              </div>
            </div>

            <div className="col-lg-6 justify-content-center my-3 d-flex">
              <img src={logos} alt="logo" className="w-75"/>
            </div>

          </div>

          <div className="row mt-5 d-none d-sm-block  col-sm-none justify-content-around">
          <div className="col-lg-6  box1 mt-5 ">
            <div className="firdt-div">
              <h1>Get involved </h1>
              <div className="sub-box mt-4"></div>
            </div>
            <div className="sec-div mt-5">
              <div>
                <img src={twitter} alt="Twitter" />
                <h6 className="mt-4">Twitter</h6>
              </div>
              <div>
                <img src={Medium} alt="Medium" />
                <h6 className="mt-4">Medium</h6>
              </div>
              <div>
                <img src={Telegram} alt="Telegram" />
                <h6 className="mt-4">Telegram</h6>
              </div>
              <div>
                <img src={Discord} alt="Discord" />
                <h6 className="mt-4">Discord</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-1">&nbsp;</div>
          <div className="col-lg-5 text-center">
            <div className="box2 mt-5">
              <h2>start trading on RAGS</h2>
              <button className="mt-5"> GET STARTED</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
