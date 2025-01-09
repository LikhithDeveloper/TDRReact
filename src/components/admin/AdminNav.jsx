import "./styles/AdminNav.css";
import { Link } from "react-router";
import { useContext } from "react";
import { FirebaseLink } from "../store/firebase";
const AdminNav = () => {
  const { Logout } = useContext(FirebaseLink);
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
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/exams">Create Exam</Link>
        <Link to="/admin/students">Students</Link>
        <button
          style={{
            padding: "7px 20px",
            border: "none",
            borderRadius: "3px",
            backgroundColor: "white",
          }}
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
