import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import MyPatient from "./MyPatient";
import Patient from "./Patient";
import CoursesList from "./CoursesList";
import Course from "./Course";
import Dashboard from "./Dashboard";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/mypatient" element={<MyPatient />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:course_id" element={<Course />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
