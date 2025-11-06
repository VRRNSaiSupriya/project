import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CoursePage.css";

export default function CoursePage() {
  const { state: course } = useLocation();
  const navigate = useNavigate();

  if (!course) {
    return (
      <div className="course-fallback">
        <h2>No course selected 😕</h2>
        <button onClick={() => navigate("/student")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="course-page">
      <div className="course-header">
        <img src={course.image} alt={course.title} className="course-banner" />
        <div className="course-info">
          <h1>{course.title}</h1>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p>{course.description}</p>
        </div>
      </div>

      <div className="course-content">
        <section className="projects">
          <h2>📘 Projects</h2>
          <ul>
            <li>Portfolio Website</li>
            <li>Login Form UI</li>
            <li>React Todo App</li>
          </ul>
        </section>

        <section className="assignments">
          <h2>📝 Assignments</h2>
          <ul>
            <li>HTML Semantics</li>
            <li>CSS Flexbox Practice</li>
            <li>React Components Task</li>
          </ul>
        </section>

        <section className="submission">
          <h2>📤 Submit Your Work</h2>
          <input type="file" />
          <button>Submit</button>
        </section>
      </div>
    </div>
  );
}
