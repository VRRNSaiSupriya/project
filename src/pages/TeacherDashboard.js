import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setStudents(res.data);
        const savedMarks = JSON.parse(localStorage.getItem("marks")) || {};
        setMarks(savedMarks);
      })
      .catch(() => alert("API fetch error"));
  }, []);

  const updateMarks = (id, value) => {
    const newMarks = { ...marks, [id]: value };
    setMarks(newMarks);
    localStorage.setItem("marks", JSON.stringify(newMarks));
  };

  const logout = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <div className="page-center" style={{ width: "480px" }}>
      <h2>Teacher Dashboard</h2>
      <p style={{ textAlign: "center", color: "#334155" }}>
        Welcome, <b>{user?.email}</b>
      </p>

      <h3 style={{ marginTop: "20px" }}>Assign Marks</h3>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name}
            <input
              type="number"
              placeholder="Marks"
              style={{
                width: "90px",
                marginLeft: "10px",
                padding: "6px",
                borderRadius: "6px",
              }}
              value={marks[s.id] || ""}
              onChange={(e) => updateMarks(s.id, e.target.value)}
            />
          </li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
