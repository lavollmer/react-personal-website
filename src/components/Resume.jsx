import "../assets/css/resume.css";

export default function Resume() {
  return (
    <>
      <div className="technical">
        <h1>Developer's Technical Proficiences:</h1>
        <p>
          <ul>
            <li>
              Build front-end websites from scratch, and ready-made website
              frameworks
            </li>
            <li>
              Create full-stack single page website applications using RESTful
              API routes and understand the communication with backend servers
            </li>
            <li>
              Implement structured and unstructured database to convert static
              websites into dynamic websites that persist data{" "}
            </li>
            <li>
              Apply the standard basics of social coding such as source control,
              issue tracking and mergining branches
            </li>
            <li>
              Demonstrate strong teamwork and communication skills with other
              students
            </li>
            <li>CSS, HTML, Javascript, Reat</li>
          </ul>
        </p>
      </div>
      <h1>Please check out my resume for more information!</h1>
      <button>
        <a
          href="/documents/resume.pdf"
          download="resume.pdf"
          className="resume"
        >
          Download Resume Here
        </a>
      </button>
    </>
  );
}
