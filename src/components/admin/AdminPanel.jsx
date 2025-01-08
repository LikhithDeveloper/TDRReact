import { Route, Routes } from "react-router";
import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import Exams from "./Exams";
import Students from "./Students";

const AdminPanel = () => {
  return (
    <div style={{ width: "100%" }}>
      <AdminNav></AdminNav>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="exams" element={<Exams></Exams>}></Route>
        <Route path="students" element={<Students></Students>}></Route>
      </Routes>
    </div>
  );
};

export default AdminPanel;
