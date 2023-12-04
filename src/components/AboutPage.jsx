import PortfolioImage from "../assets/img/portfolioimage.png";
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
          <p>
            Hello! My name is Laura. I love using design, user functionality and
            accessibiltiy to bring stories and brands to life. I have a
            versatile background in completion of a coding fullstack bootcamp,
            the flower industry, and healthcare. I believe a website should be
            visually stunning, easy to navigate and intuitive to use. I have a
            strong passion for problem solving, storytelling and inclusion for
            all. Let's connect and create something amazing!
          </p>
        </div>
      </div>
    </>
  );
}
