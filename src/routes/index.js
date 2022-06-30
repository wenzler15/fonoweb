import { Routes, Route } from "react-router-dom";
import _ from "lodash";
import { useAuth } from "../hooks/auth";

import RequireAuth from "./RequireAuth";

import Login from "../pages/Login";
import Patient from "../pages/Patient";
import Home from "../pages/MyPatient";
import MyPatient from "../pages/MyPatient";
import CoursesList from "../pages/CoursesList";
import Course from "../pages/Course";
import Dashboard from "../pages/Dashboard";
import DoctorProfile from "../pages/DoctorProfile";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={!_.isEmpty(user) ? <Home /> : <Login />} />

      <Route
        path="/mypatient"
        element={
          <RequireAuth>
            <MyPatient />
          </RequireAuth>
        }
      />
      <Route
        path="/patient"
        element={
          <RequireAuth>
            <Patient />
          </RequireAuth>
        }
      />

      <Route
        path="/courses"
        element={
          <RequireAuth>
            <CoursesList />
          </RequireAuth>
        }
      />
      <Route
        path="/courses/:course_id"
        element={
          <RequireAuth>
            <Course />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/doctorprofile"
        element={
          <RequireAuth>
            <DoctorProfile />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
