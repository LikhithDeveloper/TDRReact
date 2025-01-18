import { useContext, useEffect } from "react";
import { FirebaseLink } from "../store/firebase";
import { useNavigate } from "react-router";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const { user, loading } = useContext(FirebaseLink);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (!loading && !user) {
      // If there's no user, redirect to the login page
      navigate("/admin/login/");
    }
  }, [user, navigate, loading]);

  return (
    <>
      <div className="main"></div>
    </>
  );
};

export default Dashboard;
