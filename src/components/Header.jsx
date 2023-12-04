import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//put navigation bar into header
export default function Header() {
  return (
    <header>
      <Navbar>
        <Container>
          <h1>Laura Vollmer</h1>
          <ul>
            <Link to="/"> Home</Link>
          </ul>
          <ul>
            <Link to="/about"> About</Link>
          </ul>
          <ul>
            <Link to="/contactme"> Contact</Link>
          </ul>
          <ul>
            <Link to="/project"> Project</Link>
          </ul>
          <ul>
            <Link to="/resume"> Resume</Link>
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}
