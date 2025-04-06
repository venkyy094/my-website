import React from "react";
import "./resume.css";
import resumePDF from "../assets/Venkateshwar_Rao_Resume.pdf"; // Adjust path if needed

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <p>
        Download my full resume:
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Click here
        </a>
      </p>

      <iframe
        title="Venkateshwar Rao Resume"
        src={resumePDF}
        className="resume-frame"
      />
    </div>
  );
};

export default Resume;
