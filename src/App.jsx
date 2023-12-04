import { useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
//react-bootstrap imported
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [contactInfo, setContactInfo] = useState("");

  return (
    <>
      <div>
        <Header contactInfo={contactInfo} />
        <Home />
        <Contact contactInfo={contactInfo} setContactInfo={setContactInfo} />
        <Footer />
      </div>
    </>
  );
}
