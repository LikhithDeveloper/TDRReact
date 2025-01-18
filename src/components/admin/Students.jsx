import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";
import { FirebaseLink } from "../store/firebase";
import "./styles/Students.css";

const Students = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(FirebaseLink);
  useEffect(() => {
    if (!loading && !user) {
      // If there's no user, redirect to the login page
      navigate("/admin/login/");
    }
  }, [user, navigate, loading]);
  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            padding: "70px 150px",
          }}
          className="container border rounded mt-5 w-75 d-flex flex-column mb-5"
        >
          <h5 className="display-6 mb-3 fs-2">ADD STUDENT</h5>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="question">Name:</label>
              <input
                type="text"
                name="question"
                className="form-control"
                id="question"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="question">UserName:</label>
              <input
                type="text"
                name="question"
                className="form-control"
                id="question"
                placeholder="Username"
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="option1">Class/Course:</label>
              <input
                type="text"
                name="opt1"
                className="form-control"
                id="opt1"
                placeholder="Class/Course"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="option1">Mobile:</label>
              <input
                type="text"
                name="opt1"
                className="form-control"
                id="opt1"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="option1">Email:</label>
              <input
                type="text"
                name="opt1"
                className="form-control"
                id="opt1"
                placeholder="Email"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Students;
