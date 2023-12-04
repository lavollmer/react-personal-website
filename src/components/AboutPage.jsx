import PortfolioImage from "../assets/img/laura_greenbackground.png";
import "../assets/css/about.css";

export default function AboutPage() {
  return (
    <>
      <div className="container-bio">
        <img
          className="photo-me"
          src={PortfolioImage}
          alt="Laura's Profile Image"
        />
        <div className="biography">
          <h1>Hey there!</h1>
          <p>
            I love using design to create user functionality and accessibility
            that bring stories and brands to life. I have a versatile background
            with the completion of a coding fullstack bootcamp, working as a
            flower designer, and as a pharmacist. I believe a website should be
            visually stunning, easy to navigate and intuitive to use. I have a
            strong passion for problem solving, storytelling and inclusion for
            all. Let's connect and create something amazing!
          </p>
          <p>Sincerely, Laura, PharmD, MBA, BCPS, DPLA</p>
        </div>
      </div>
    </>
  );
}
