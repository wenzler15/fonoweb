import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import RegisterUser from "./RegisterUser";
import SuccessfullyQuery from "./SuccessfullyQuery";
import Schedule from "./Schedule";
import ChangeSchedule from "./ChangeSchedule";
import RegisterNewPatient from "./RegisterNewPatient";
import MyPatient from "./MyPatient";
import NewAnamnese from "./NewAnamnese";
import NewAvaliation from "./NewAvaliation";
import ModelsEvaluation from "./ModelsEvaluation";
import Evaluation from "./Evaluation";
import Anamnese from "./Anamnese";
import ToViewAnamnese from "./ToViewAnamnese";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mypatient" element={<MyPatient />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/successfullyquery" element={<SuccessfullyQuery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/changeschedule" element={<ChangeSchedule />} />
        <Route path="/registernewpatient" element={<RegisterNewPatient />} />
        <Route path="/newanamnese" element={<NewAnamnese />} />
        <Route path="/newavaliation" element={<NewAvaliation />} />
        <Route path="/modelsevaluation" element={<ModelsEvaluation />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/anamnese" element={<Anamnese />} />
        <Route path="/toviewanamnese" element={<ToViewAnamnese />} />
      </Routes>
    </Router>
  );
}
