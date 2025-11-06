import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      instructor: "Mr. Ravi Kumar",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg",
      description: "Learn HTML, CSS, JavaScript, and React to build modern websites.",
    },
    {
      id: 2,
      title: "Data Structures",
      instructor: "Ms. Ananya Gupta",
      image: "https://cdn.pixabay.com/photo/2022/07/18/09/15/data-7329703_1280.jpg",
      description: "Understand arrays, stacks, queues, linked lists, and trees deeply.",
    },
    {
      id: 3,
      title: "Design & Analysis of Algorithms",
      instructor: "Dr. S. Sharma",
      image: "https://cdn.pixabay.com/photo/2016/06/29/09/20/algorithm-1485900_1280.jpg",
      description: "Master algorithm design techniques like divide & conquer, DP, and greedy.",
    },
    {
      id: 4,
      title: "Python Programming",
      instructor: "Mr. Rajesh Patel",
      image: "https://cdn.pixabay.com/photo/2017/01/31/17/44/computer-2025791_1280.png",
      description: "Write efficient Python code and explore object-oriented programming.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-100 to-indigo-200 p-10">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">🎓 Student Dashboard</h1>
        <p className="text-lg text-gray-600">Select a course to view projects & assignments</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`, { state: course })}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-1"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-indigo-600 mb-2">{course.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                Instructor: <span className="font-semibold">{course.instructor}</span>
              </p>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
