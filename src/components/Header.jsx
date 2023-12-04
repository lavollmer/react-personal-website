import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/header.css";

//put navigation bar into header
export default function Header() {
  const whiteBackground = {
    backgroundColor: "black",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "0px",
    padding: "0px",
  };

  return (
    <header>
      <Navbar style={whiteBackground}>
        <Container className="navbar-container">
          <div style={navStyle}>
            <h1>Laura Vollmer</h1>
          </div>
          <ul className="navbar-links" style={navStyle}>
            <Link to="/" className="link-style">
              Home
            </Link>
          </ul>
          <ul className="navbar-links" style={navStyle}>
            <Link to="/about" className="link-style">
              About
            </Link>
          </ul>
          <ul className="navbar-links" style={navStyle}>
            <Link to="/contactme" className="link-style">
              Contact
            </Link>
          </ul>
          <ul className="navbar-links" style={navStyle}>
            <Link to="/project" className="link-style">
              Project
            </Link>
          </ul>
          <ul className="navbar-links" style={navStyle}>
            <Link to="/resume" className="link-style">
              Resume
            </Link>
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}
