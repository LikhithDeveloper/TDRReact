import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";
import { FirebaseLink } from "../store/firebase";

const Students = () => {
  const navigate = useNavigate();
  const { user } = useContext(FirebaseLink);
  useEffect(() => {
    if (!user) {
      // If there's no user, redirect to the login page
      navigate("/admin/login/");
    }
  }, [user, navigate]);
  return <h1>Welcome to students</h1>;
};

export default Students;
