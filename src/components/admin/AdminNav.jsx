import "./styles/AdminNav.css";
import { Link } from "react-router";
const AdminNav = () => {
  return (
    <nav
      className="admin-nav"
      style={{ width: "100%", backgroundColor: "#17191B", height: "70px" }}
    >
      <div className="admin-logo">
        <h4>ADMIN PANEL</h4>
      </div>
      <div className="options-admin">
        <Link to="/">Home</Link>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/exams">Create Exam</Link>
        <Link to="/admin/students">Students</Link>
      </div>
    </nav>
  );
};

export default AdminNav;
