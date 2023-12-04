import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Project from "./components/Project";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
//react-bootstrap imported
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    info: "",
  });

  return (
    <>
      <Router>
        <Header contactData={contactData} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Project />} />
          <Route
            path="/contactme"
            element={
              <Contact
                contactData={contactData}
                setContactData={setContactData}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
