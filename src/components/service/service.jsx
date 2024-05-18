import React from 'react'
import "./service.css";
import ServiceData from "../data/service.json"

export default function Service() {

  const service = ServiceData.service;
  console.log(service);

  return (
    <>
      <div className='container-fluid ' id="action_service">
        <div className='container'>
          <div className="row position-relative">
            <div className="serviceH1 text-center col-sm-none d-none d-sm-block w-100"><h1 className="serviceTextH1">OUR SERVICES</h1></div>
            <div className="serviceH6 text-center w-100"><h6 className="serviceTextH6">our services</h6></div>
          </div>
        </div>

        <div className="container">
        <div className="row mt-sm-5 mt-5">
          {service.map((service) => (
            <div key={service.id} className="col-lg-4 mb-4" style={{ margin: "0 auto" }}>
              <div className="">
                <img
                  src={service.icon}
                  className="card-img-top p-4"
                  alt={service.name}
                  style={{ height: "100px", objectFit: "contain" }}
                />
                <div className="text-center">
                  <h5 className="fw-bold">{service.title}</h5>{" "}
                  <h6 className="fw-bold">{service.info}</h6>
                  <p className="">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}
