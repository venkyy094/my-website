// src/pages/Projects.jsx
import React from "react";
import "./Projects.css";
import hospitalImg from "../assets/hospital-management-system.png";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="project-heading">Projects</h2>

      <div className="projects-container">
        {/* Project 1 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={hospitalImg}
            alt="Hospital Management System"
            className="project-image"
          />
          <div className="project-content">
            <h3>Hospital Management System</h3>
            <p>
              A complete backend-driven application to manage hospital
              operations including:
            </p>
            <ul>
              <li>✔️ Patient Management</li>
              <li>✔️ Appointment Scheduling</li>
              <li>✔️ Medical Records Handling</li>
              <li>✔️ Inventory and Billing Modules</li>
              <li>✔️ User & Staff Role Management</li>
            </ul>
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <ul className="tech-stack">
              <li>🔧 Java</li>
              <li>🧰 Spring Boot</li>
              <li>💾 PostGres</li>
              <li>🌐 REST APIs</li>
              <li>🔐 JWT Security</li>
              <li>📄 Hibernate/JPA</li>
              <li>⚙️ Maven</li>
              <li>🧩 Microservices</li>
            </ul>
          </div>
        </motion.div>

        {/* Project 2 */}

        <div className="project-content">
          <h3>Banking Management System</h3>
          <p>
            A robust backend-powered system designed to handle banking
            operations such as:
          </p>
          <ul>
            <li>✔️ Customer Account Management</li>
            <li>✔️ Fund Transfers & Transactions</li>
            <li>✔️ Loan & Credit Services</li>
            <li>✔️ Transaction History & Statements</li>
            <li>✔️ User Authentication & Role Management</li>
          </ul>
          <p>
            <strong>Technologies Used:</strong>
          </p>
          <ul className="tech-stack">
            <li>🔧 Java</li>
            <li>🧰 Spring Boot</li>
            <li>💾 PostGres</li>
            <li>🌐 REST APIs</li>
            <li>🔐 JWT Security</li>
            <li>📄 Hibernate/JPA</li>
            <li>⚙️ Maven</li>
            <li>🧩 Microservices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
