import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";
import { FirebaseLink } from "../store/firebase";

const Students = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(FirebaseLink);
  useEffect(() => {
    if (!loading && !user) {
      // If there's no user, redirect to the login page
      navigate("/admin/login/");
    }
  }, [user, navigate, loading]);
  return <h1>Welcome to students</h1>;
};

export default Students;
