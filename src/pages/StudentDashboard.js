import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [tab, setTab] = useState("subjects");

  // SUBJECTS
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(saved);
  }, []);

  const addSubject = () => {
    if (subject.trim() === "") return;
    const updated = [...subjects, subject];
    setSubjects(updated);
    localStorage.setItem("subjects", JSON.stringify(updated));
    setSubject("");
  };

  const deleteSubject = (i) => {
    const updated = subjects.filter((_, index) => index !== i);
    setSubjects(updated);
    localStorage.setItem("subjects", JSON.stringify(updated));
  };

  // ASSIGNMENTS DATA
  const assignments = [
    { id: 1, title: "Math Assignment", status: "Submitted" },
    { id: 2, title: "AI Lab Report", status: "Pending" },
  ];

  // PROJECTS DATA
  const projects = [
    { id: 1, title: "Portfolio Website", progress: "Completed" },
    { id: 2, title: "React App Mini Project", progress: "In Progress" },
  ];

  const logout = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <div className="page-center" style={{ width: "480px" }}>
      <h2>Student Dashboard</h2>
      <p style={{ textAlign: "center", color: "#334155" }}>
        Welcome, <b>{user?.email}</b>
      </p>

      {/* TAB BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setTab("subjects")}>Subjects</button>
        <button onClick={() => setTab("assignments")}>Assignments</button>
        <button onClick={() => setTab("projects")}>Projects</button>
      </div>

      {/* SUBJECTS TAB */}
      {tab === "subjects" && (
        <>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Subject"
          />
          <button onClick={addSubject}>Add Subject</button>

          <ul>
            {subjects.map((s, i) => (
              <li key={i}>
                {s}
                <button onClick={() => deleteSubject(i)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* ASSIGNMENTS TAB */}
      {tab === "assignments" && (
        <ul>
          {assignments.map((a) => (
            <li key={a.id}>
              {a.title}
              <span style={{ color: "#2563eb", marginLeft: "10px" }}>
                {a.status}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* PROJECTS TAB */}
      {tab === "projects" && (
        <ul>
          {projects.map((p) => (
            <li key={p.id}>
              {p.title}
              <span style={{ color: "#059669", marginLeft: "10px" }}>
                {p.progress}
              </span>
            </li>
          ))}
        </ul>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
}
