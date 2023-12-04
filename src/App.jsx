import { useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
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
      <div>
        <Header contactData={contactData} />
        <Home />
        <Project />
        <Contact contactData={contactData} setContactData={setContactData} />
        <Footer />
      </div>
    </>
  );
}
