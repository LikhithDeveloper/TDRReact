import { useContext, useEffect } from "react";
import { FirebaseLink } from "../store/firebase";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { user } = useContext(FirebaseLink);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      // If there's no user, redirect to the login page
      navigate("/admin/login/");
    }
  }, [user, navigate]);

  return <h2>Hi Dashboard</h2>;
};

export default Dashboard;
