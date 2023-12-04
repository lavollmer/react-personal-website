import "../assets/css/footer.css";
import InstagramLogo from "../assets/img/instagram.svg";
import GithubLogo from "../assets/img/square-github.svg";
import LinkedInLogo from "../assets/img/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <p className="logos">
        <a href="https://www.instagram.com/">
          <img src={InstagramLogo} alt="Instagram Logo"></img>
        </a>
        <a href="https://github.com/">
          <img src={GithubLogo} alt="Github Logo"></img>
        </a>
        <a href="https://www.linkedin.com/">
          <img src={LinkedInLogo} alt="Linkedin Logo"></img>
        </a>
      </p>
      <p className="copyright">
        Copyright 2023 Laura Vollmer. All rights reserved.
      </p>
    </footer>
  );
}
