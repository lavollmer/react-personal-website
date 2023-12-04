import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/header.css";

//put navigation bar into header
export default function Header() {
  return (
    <header>
      <Navbar>
        <Container className="navbar-container">
          <h1>Laura Vollmer</h1>
          <ul className="navbar-links">
            <Link to="/" className="link-style">
              Home
            </Link>
          </ul>
          <ul className="navbar-links">
            <Link to="/about" className="link-style">
              About
            </Link>
          </ul>
          <ul className="navbar-links">
            <Link to="/contactme" className="link-style">
              Contact
            </Link>
          </ul>
          <ul className="navbar-links">
            <Link to="/project" className="link-style">
              Project
            </Link>
          </ul>
          <ul className="navbar-links">
            <Link to="/resume" className="link-style">
              Resume
            </Link>
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}
