import { useContext, useEffect } from "react";
import { FirebaseLink } from "../store/firebase";
import { useNavigate } from "react-router";

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

  return <h2>Hi Dashboard</h2>;
};

export default Dashboard;
