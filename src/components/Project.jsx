//THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import EmployeeProjectImg from "../assets/img/employeetracker-project.png";
import POSTMANimg from "../assets/img/POSTMAN_example.png";
import SongQuestImg from "../assets/img/songquestmainpage.png";
import RobotProject from "../assets/img/robotproject.jpg";

export default function Project() {
  return (
    <>
      <div>
        <h1>These are some of my projects that I have worked on:</h1>
      </div>
      <div className="projects-portfolio">
        <div>
          <img src={RobotProject} alt="Robot Project Image"></img>
          <h2>Project Robo-Murder-Mystery</h2>
          <p>
            The robot murder mystery game is a guesswho/clue style game. The
            game player will start the game by pressing a play button on the
            main page. On the main page, the game also includes game rules, a
            github repo link and a scoreboard. We built this game after
            brainstorming unique ways to utilize an API in coding.
          </p>
          <a href="https://github.com/FranklinBrad/robot-murder-mystery/">
            Github Link
          </a>
          <a href="https://franklinbrad.github.io/robot-murder-mystery/">
            Robot Murder Mystery Page
          </a>
        </div>
        <div>
          <img src={SongQuestImg} alt="SongQuest Image"></img>
          <h2>Project SongQuest</h2>
          <p>
            SongQuest is a website for songwriters and music producers. The end
            user starts by either logging in or signing up as a user to upload
            music. In their profile, they are able to upload their music by song
            title, song link and author. Additionally, they are able to see
            other users, and their comments under youtube videos. The end user
            is able to add their own comments to the profile page. The website
            is a responsive, interactive and uses iFrame to embed Youtube
            videos.
          </p>
          <a href="https://github.com/lavollmer/songquest">Github Link</a>
          <a href="https://songquest-67489ba089f5.herokuapp.com/">
            Heroku Link
          </a>
        </div>
        <div>
          <img
            src={EmployeeProjectImg}
            alt="Employee Tracker Project Image"
          ></img>
          <h2>Project SQL-EmployeeTracker</h2>
          <p>
            This project involved creating a command line user prompt to store
            data about a business. The inquirer prompt asked the end user to
            view all departments, view all roles, view all employees, add an
            employee, remove an employee, update and employee, etc. The end user
            is able to change the data based on the request and update the
            printed table of data.
          </p>
          <a href="https://github.com/lavollmer/sql-employeetracker">
            Github Link
          </a>
          <a href="https://drive.google.com/file/d/1uXMwpWzpA7uGmgXkYhH47u1YnA36SloA/view">
            Video Submission
          </a>
        </div>
        <div>
          <img src={POSTMANimg} alt="POSTMAN ECommerce-Backend Example"></img>
          <h2>Project Ecommerce-Backend</h2>
          <p>
            This project entailed building a back end for an e-commerce site
            using starter code. In this project, an individual will configure a
            working Express API and utilize mySQL database and Sequelize.
          </p>
          <a href="https://github.com/lavollmer/ecommerce-backend">
            Github Link
          </a>
          <a href="https://drive.google.com/file/d/13D4RGf8XrQD78kG2QxchkzWWwzDr0Cn9/view">
            Video Submission
          </a>
        </div>
        <div>
          <img></img>
          <h2>Project XXX</h2>
          <p>This project was about xyz.</p>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div>
          <img></img>
          <h2>Project XXX</h2>
          <p>This project was about xyz.</p>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </>
  );
}
