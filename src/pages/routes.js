import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import RegisterUser from "./RegisterUser";
import SuccessfullyQuery from "./SuccessfullyQuery";
import Pacientes from "./Pacientes";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/successfullyquery" element={<SuccessfullyQuery />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </Router>
  );
}
