import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
//react-bootstrap imported
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
