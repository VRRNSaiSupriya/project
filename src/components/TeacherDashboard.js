import React from "react";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {
  const submissions = [
    { id: 1, student: "Sai", project: "Portfolio Website", status: "Pending" },
    { id: 2, student: "Ananya", project: "AI Chatbot", status: "Reviewed" },
    { id: 3, student: "Rahul", project: "React Todo App", status: "Pending" },
    { id: 4, student: "Sneha", project: "DSA Visualizer", status: "Reviewed" },
  ];

  return (
    <div className="teacher-dashboard">
      <header className="teacher-header">
        <h1>👩‍🏫 Teacher Dashboard</h1>
        <p>Manage and review student project submissions</p>
      </header>

      <div className="teacher-table-container">
        <table className="teacher-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Project</th>
              <th>Status</th>
              <th>Evaluate</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id}>
                <td>{s.student}</td>
                <td>{s.project}</td>
                <td
                  className={`status ${
                    s.status === "Reviewed" ? "reviewed" : "pending"
                  }`}
                >
                  {s.status}
                </td>
                <td>
                  <button className="review-btn">
                    {s.status === "Pending" ? "Review" : "Re-evaluate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
