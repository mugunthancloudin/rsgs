import React from "react";
import "./landingpage.css";
import Navbar from "../../components/header&footer/header/navbar";
import Home from "../../components/home/home";
import About from "../../components/about/about";
import Service from "../../components/service/service";
import Benifits from "../../components/benifits/benifits";
import Contact from "../../components/contact/contact";
import Footer from "../../components/header&footer/footer/footer";
import MyNavbar from "../../components/header&footer/header/navbar";

export default function Landingpage() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />

      <Benifits />
      <Contact />
      <Service />
      <Footer />
    </>
  );
}
