import "../assets/css/footer.css";
import InstagramLogo from "../assets/img/instagram.svg";
import GithubLogo from "../assets/img/square-github.svg";
import LinkedInLogo from "../assets/img/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logos">
        <a href="https://www.instagram.com/">
          <img
            className="logoimage"
            src={InstagramLogo}
            alt="Instagram Logo"
          ></img>
        </a>
        <a href="https://github.com/">
          <img className="logoimage" src={GithubLogo} alt="Github Logo"></img>
        </a>
        <a href="https://www.linkedin.com/">
          <img
            className="logoimage"
            src={LinkedInLogo}
            alt="Linkedin Logo"
          ></img>
        </a>
      </div>
      <p className="copyright">
        Copyright 2023 Laura Vollmer. All rights reserved.
      </p>
    </footer>
  );
}
