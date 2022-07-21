import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import _ from "lodash";
import { useAuth } from "../hooks/auth";

import RequireAuth from "./RequireAuth";

import DoctorLogin from "../pages/DoctorLogin";
import Patient from "../pages/Patient";
import Home from "../pages/Home";
import MyPatient from "../pages/MyPatient";
import CoursesList from "../pages/CoursesList";
import Course from "../pages/Course";
import Schedule from "../pages/Schedule";
import Dashboard from "../pages/Dashboard";
import DoctorProfile from "../pages/DoctorProfile";

import { DOCTOR, PACIENT } from "../constants";
import DoctorRegister from "../pages/DoctorRegister";
import Anamnesis from "../pages/Anamnesis";

const AppRoutes = () => {
  const { user, userType } = useAuth();

  const initialRoute = useMemo(() => {
    if (!_.isEmpty(user)) {
      return <MyPatient />;
    } else {
      switch (userType) {
        case PACIENT:
          return <DoctorLogin />;
        case DOCTOR:
          return <DoctorLogin />;
        default:
          return <Home />;
      }
    }
  }, [user, userType]);

  return (
    <Routes>
      <Route path="/" element={initialRoute} />
      <Route path="/login" element={<DoctorLogin />} />
      <Route path="/register" element={<DoctorRegister />} />

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
        path="/schedule"
        element={
          <RequireAuth>
            <Schedule />
          </RequireAuth>
        }
      />

      <Route
        path="/anamnesis"
        element={
          <RequireAuth>
            <Anamnesis />
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
