import "../assets/css/home.css";
import heroImage from "../assets/img/flower_herokimage.png";

export default function Home() {
  const imageBackground = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "0px",
    padding: "0px",
  };
  return (
    <div style={imageBackground}>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div>
          <div className="mainpage-writing">
            <h1 className="tagline">Designer & Storyteller</h1>
            <p>Welcome to my site!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
