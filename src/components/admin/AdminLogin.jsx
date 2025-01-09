import { useState } from "react";
import { useContext } from "react";
import { FirebaseLink } from "../store/firebase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignUp, SignIn } = useContext(FirebaseLink);

  const CreateUser = (e) => {
    e.preventDefault();
    console.log("Hi");
    SignIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "70px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container border mt-5 w-25 d-flex flex-column shadow"
    >
      <h5 className="display-6 mb-3 fs-2 ">LOGIN</h5>
      <form onSubmit={CreateUser}>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Email:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label for="exampleInputPassword1">Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
