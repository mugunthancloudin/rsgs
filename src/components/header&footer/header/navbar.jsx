import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../../assets/nav/Logo.png";
import "./navbar.css";

export default function MyNavbar() {

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "linear",
    });
  };

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navBg py-3" sticky="top">
      <Container className="navBg">
        <Navbar.Brand as={ScrollLink} to="/" className="brandName" onClick={scrollToTop}>
          <img
            src={logo}
            alt="logo"
            width={50}
            className=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav> {/* To push items to the left */}
          <div className="end"> {/* This div will contain the links pushed to the end */}
            <Nav>
              <ScrollLink
                to="action_home"
                duration={100}
                spy={true}
                smooth={true}
                exact="true"
                className="text-white fw-bold mt-2 me-4 link-underline link-underline-opacity-0"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="action_about"
                duration={100}
                spy={true}
                smooth={true}
                exact="true"
                className="text-white fw-bold mt-2 me-4 link-underline link-underline-opacity-0"
              >
                About
              </ScrollLink>
              
              <ScrollLink
                to="action_benifits"
                duration={100}
                spy={true}
                smooth={true}
                exact="true"
                className="text-white fw-bold mt-2 me-4 link-underline link-underline-opacity-0"
              >
                Benifits
              </ScrollLink>

              <ScrollLink
                to="action_service"
                duration={100}
                spy={true}
                smooth={true}
                exact="true"
                className="text-white fw-bold mt-2 me-4 link-underline link-underline-opacity-0"
              >
                Service
              </ScrollLink>

              <ScrollLink
                to="action_contact"
                duration={100}
                spy={true}
                smooth={true}
                exact="true"
                className="text-white fw-bold mt-2 me-4 link-underline link-underline-opacity-0"
              >
                Contact
              </ScrollLink>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}


