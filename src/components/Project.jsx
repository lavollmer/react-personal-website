//THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import EmployeeProjectImg from "../assets/img/employeetracker-project.png";
import POSTMANimg from "../assets/img/POSTMAN_example.png";
import SongQuestImg from "../assets/img/songquestmainpage.png";
import RobotProject from "../assets/img/robotproject.jpg";
import SnowLeopard from "../assets/img/snowleopardquiz.png";
import PWAImg from "../assets/img/JATE.png";
import "../assets/css/project.css";

export default function Project() {
  return (
    <>
      <div>
        <h1>Project Portfolio</h1>
      </div>
      <div>
        <div className="project-item">
          <img src={RobotProject} alt="Robot Project Image"></img>
          <div className="project-writing">
            <h2>Project Robo-Murder-Mystery</h2>
            <p>
              The robot murder mystery game is a guesswho/clue style game. The
              game player will start the game by pressing a play button on the
              main page. On the main page, the game also includes game rules, a
              github repo link and a scoreboard. We built this game after
              brainstorming unique ways to utilize an API in coding.
            </p>
            <h2>Project Links:</h2>
            <a href="https://github.com/FranklinBrad/robot-murder-mystery/">
              Github Link
            </a>
            <a href="https://franklinbrad.github.io/robot-murder-mystery/">
              Robot Murder Mystery Page
            </a>
          </div>
        </div>
        <div className="project-item">
          <img src={SongQuestImg} alt="SongQuest Image"></img>
          <div className="project-writing">
            <h2>Project SongQuest</h2>
            <p>
              SongQuest is a website for songwriters and music producers. The
              end user starts by either logging in or signing up as a user to
              upload music. In their profile, they are able to upload their
              music by song title, song link and author. Additionally, they are
              able to see other users, and their comments under youtube videos.
              The end user is able to add their own comments to the profile
              page. The website is a responsive, interactive and uses iFrame to
              embed Youtube videos.
            </p>
            <h2>Project Links:</h2>
            <a href="https://github.com/lavollmer/songquest">Github Link</a>
            <a href="https://songquest-67489ba089f5.herokuapp.com/">
              Heroku Link
            </a>
          </div>
        </div>
      </div>
      <div className="project-item">
        <img
          src={EmployeeProjectImg}
          alt="Employee Tracker Project Image"
        ></img>
        <div className="project-writing">
          <h2>Project SQL-EmployeeTracker</h2>
          <p>
            This project involved creating a command line user prompt to store
            data about a business. The inquirer prompt asked the end user to
            view all departments, view all roles, view all employees, add an
            employee, remove an employee, update and employee, etc. The end user
            is able to change the data based on the request and update the
            printed table of data.
          </p>
          <h2>Project Links:</h2>
          <a href="https://github.com/lavollmer/sql-employeetracker">
            Github Link
          </a>
          <a href="https://drive.google.com/file/d/1uXMwpWzpA7uGmgXkYhH47u1YnA36SloA/view">
            Video Submission
          </a>
        </div>
      </div>
      <div className="project-item">
        <img src={POSTMANimg} alt="POSTMAN ECommerce-Backend Example"></img>
        <div className="project-writing">
          <h2>Project Ecommerce-Backend</h2>
          <p>
            This project entailed building a back end for an e-commerce site
            using starter code. In this project, an individual will configure a
            working Express API and utilize mySQL database and Sequelize.
          </p>
          <h2>Project Links:</h2>
          <a href="https://github.com/lavollmer/ecommerce-backend">
            Github Link
          </a>
          <a href="https://drive.google.com/file/d/13D4RGf8XrQD78kG2QxchkzWWwzDr0Cn9/view">
            Video Submission
          </a>
        </div>
      </div>
      <div className="project-item">
        <img src={SnowLeopard} alt="Snow Leopard Timed Quiz Project"></img>
        <div className="project-writing">
          <h2>Project Timed Quiz</h2>
          <p>
            This project involves creating a multiple question quiz for a user
            with a timer element. The user will select the "start button" to
            begin the quiz. During the quiz, the user will answer a series of
            question in which he/she will have to select the answer. Each answer
            will be documented whether it is correct or incorrect and tallied to
            the final score. The user will be notified by the browser whether
            their score is correct or incorrect. If incorrect, the user's timer
            will be decrease as a penalty for an incorrect score. At the end of
            the game, the user will be notified of their overall score. From
            there, the user will be able to input their intials and be logged
            into a high score board.{" "}
          </p>
          <h2>Project Links:</h2>
          <a href="https://lavollmer.github.io/timed-quiz/">
            **Only Link** Github Link
          </a>
        </div>
      </div>
      <div className="project-item">
        <img src={PWAImg} alt="PWA Project Image"></img>
        <div className="project-writing">
          <h2>Project PWAs</h2>
          <p>
            This project was to properly configure and update a website to be a
            functional PWA. A PWA is able to run on multiple platforms online
            and offline. Benefits of PWAs include: offline function, optimizing
            webpages, and single codebase.
          </p>
          <h2>Project Links:</h2>
          <a href="https://github.com/lavollmer/PWA-text-editor">Github Link</a>
          <a href="https://pwas-text-editor-46b7c75bdb24.herokuapp.com/">
            Heroku Link
          </a>
        </div>
      </div>
    </>
  );
}
