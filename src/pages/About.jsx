// src/pages/About.jsx
import React from "react";
import "./About.css";
import profilePhoto from "../assets/venkateshwar.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        {/* Image & About Me Side by Side */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={profilePhoto} alt="Venkateshwar Rao" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Hi! I'm Venkateshwar Rao</h2>
          <p>
            A passionate developer focused on building modern web applications.
            I enjoy working with Java,Spring Boot, Microservices and Database to
            create efficient and elegant solutions. Always eager to learn and
            collaborate on exciting projects.
          </p>

          <h3>Education</h3>
          <ul>
            <li>M.Tech – NIT Trichy, 2014</li>
            <li>B.Tech – kakatiya Institute of Technology and Science, 2010</li>
            <li>Intermediate – Trinity Junior College, 2005</li>
            <li>SSC – Andhara Pradesh State Board School, 2003</li>
          </ul>

          <h3>Professional Experience</h3>
          <ul>
            <li>
              <strong>Java Backend Developer</strong> – REZNEXT GLOBAL SOLUTIONS
              (2020–2024)
              <br />
              Worked on Spring Boot microservices, RESTful APIs, and secure
              backend systems. Collaborated with frontend teams to deliver
              full-stack solutions.
            </li>
            <li>
              <strong> Assistant Professor</strong> – VNR Vignana Jyothi
              Institute of Engineering and Technology. (2015-2019)
              <br />
              Taught a Java Course in Department Level
            </li>
            <li>
              <strong> Assistant Professor</strong> – Vignan's Lara Institute of
              Science and Technology-Guntur, A.P. (2014-2015)
              <br />
            </li>
            <li>
              <strong> Process Planner</strong> – Carboline Toolings Pvt LTD.
              (2010-2012)
              <br />
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
