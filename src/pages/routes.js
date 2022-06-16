import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import RegisterUser from "./RegisterUser";
import SuccessfullyQuery from "./SuccessfullyQuery";
import Schedule from "./Schedule";
// import ChangeSchedule from "./ChangeSchedule";
import RegisterNewPatient from "./RegisterNewPatient";
import MyPatient from "./MyPatient";
import NewAnamnese from "./NewAnamnese";
import NewAvaliation from "./NewAvaliation";
import ModelsEvaluation from "./ModelsEvaluation";
import Evaluation from "./Evaluation";
import Anamnese from "./Anamnese";
import ToViewAnamnese from "./ToViewAnamnese";
// import Pacientes from "./Pacientes";
import PaymentUser from "./PaymentUser";
import DoctorExercises from "./DoctorExercises";
import DoctorWeeks from "./DoctorWeeks";
import CreateWeeks from "./CreateWeeks";
import CreateExercises from "./CreateExercises";
import Patient from "./Patient";
import CoursesList from "./CoursesList";
import Course from "./Course";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/payment" element={<PaymentUser />} />

        <Route path="/mypatient" element={<MyPatient />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:course_id" element={<Course />} />

        <Route path="/successfullyquery" element={<SuccessfullyQuery />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="/changeschedule" element={<ChangeSchedule />} /> */}
        <Route path="/registernewpatient" element={<RegisterNewPatient />} />
        <Route path="/newanamnese" element={<NewAnamnese />} />
        <Route path="/newavaliation" element={<NewAvaliation />} />
        <Route path="/modelsevaluation" element={<ModelsEvaluation />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/anamnese" element={<Anamnese />} />
        <Route path="/toviewanamnese" element={<ToViewAnamnese />} />
        {/* <Route path="/pacientes" element={<Pacientes />} /> */}
        <Route path="/doctorexercises" element={<DoctorExercises />} />
        <Route path="/doctorweeks" element={<DoctorWeeks />} />
        <Route path="/createweeks" element={<CreateWeeks />} />
        <Route path="/createexercises" element={<CreateExercises />} />
      </Routes>
    </Router>
  );
}
