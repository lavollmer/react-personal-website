import React from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Home from "./Home";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//put navigation bar into header
export default function Header() {
  return (
    <header>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Laura Vollmer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/contactme">Contact</Nav.Link>
              <Nav.Link to="/projects">Project</Nav.Link>
              <Nav.Link to="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar>
        <Container>
          <h1>Laura Vollmer</h1>
          <ul>
            <Link to="/"> Home</Link>
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
