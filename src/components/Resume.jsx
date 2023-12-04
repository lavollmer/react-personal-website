import "../assets/css/resume.css";

export default function Resume() {
  return (
    <>
      <div className="technical">
        <h2>Developer's Technical Proficiences:</h2>
        <p>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>Javascript</li>
          </ul>
        </p>
      </div>
      <h2>Please check out my resume for more information!</h2>
      <a href="/documents/resume.pdf" download="resume.pdf" className="resume">
        Download Resume Here
      </a>
    </>
  );
}
