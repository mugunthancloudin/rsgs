import React from "react";
import "./benifits.css";
import BenifitsData from "../data/benifits.json";

export default function Benifits() {
  const benifits = BenifitsData.benifits;
  console.log(benifits);

  return (
    <>
      <div className="container-fluid benifitsBg" id="action_benifits">
        {/* <div className="container">
          <div className="row position-relative">
            <div className="serviceH1 text-center">
              <h1 className="serviceTextH1">Benifits</h1>
            </div>
            <div className="serviceH6 text-center ">
              <h6 className="serviceTextH6">Benifits</h6>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="row text-center py-5">
            <h1 className="fw-bold">Ragscoin 2.0 Benefits</h1>
            <p className="fw-bold">
              Hybrid crypto offers several key benefits that can revolutionize
              the cryptocurrency market
            </p>
          </div>
          <div className="row justify-content-center mt-3">
            {benifits.map((benifit) => (
              <div
                key={benifit.id}
                className="col-lg-4 card benefitsCard mb-4  "
                // style={{ margin: "px auto" }}
              >
                <div className="">
                  <img
                    src={benifit.icon}
                    className="card-img-top p-2 mb-2"
                    alt={benifit.title}
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="text-center">
                    <h5 className="fw-bold">{benifit.title}</h5>
                    <h6 className="fw-bold">{benifit.info}</h6>
                    <p className="">{benifit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
