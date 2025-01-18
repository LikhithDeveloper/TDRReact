import { Route, Routes } from "react-router";
import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import Exams from "./Exams";
import Students from "./Students";
import AdminLogin from "./AdminLogin";
import SetPaper from "./SetPaper";

const AdminPanel = () => {
  return (
    <div style={{ width: "100%" }}>
      <AdminNav></AdminNav>
      <Routes>
        <Route path="login" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="exams" element={<Exams></Exams>}></Route>
        <Route path="students" element={<Students></Students>}></Route>
        <Route
          path="setpaper/:id/:exam"
          element={<SetPaper></SetPaper>}
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminPanel;
