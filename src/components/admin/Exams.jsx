import image1 from "../../assets/cover-pic---b2b-portals---eng.png";
import "./styles/Exam.css";
import { useNavigate } from "react-router";
import { useEffect, useContext, useState } from "react";
import { FirebaseLink } from "../store/firebase";
import { collection, getDocs } from "firebase/firestore";
const Exams = () => {
  const { user, loading, AddExams, db, setEx, ex, DeleteExamList } =
    useContext(FirebaseLink);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [examsset, setExamsSet] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Exams"));
        const exams = [];
        querySnapshot.forEach((doc) => {
          exams.push({ id: doc.id, ...doc.data() });
        });
        setExamsSet(exams);
        setSpinner(true);
      } catch (error) {
        console.error("Error fetching Exams:", error);
      }
    };

    fetchExams();
  }, [ex]);

  useEffect(() => {
    if (examsset) {
      console.log("Updated examsset:", examsset);
    }
  }, [examsset]);

  useEffect(() => {
    if (!loading && !user) {
      // If there's no user, redirect to the login page
      navigate("/admin/login/");
    }
  }, [user, navigate, loading]);

  // Create Exam
  const CreateEaxm = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    AddExams(title, description);
    setTitle("");
    setDescription("");
  };

  // Delete Exams
  const DeleteExam = (id) => {
    DeleteExamList(id);
  };
  return (
    <>
      {!spinner ? (
        <div className="spin">
          <div
            className="spinner-border"
            role="status"
            style={{ width: "100px", height: "100px" }}
          >
            <span className="sr-only" style={{ width: "200px" }}></span>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            padding: "70px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container border rounded mt-5 w-25 d-flex flex-column"
        >
          <h5 className="display-6 mb-3 fs-2 ">CREATE EXAM</h5>
          <form onSubmit={CreateEaxm}>
            <div className="form-group mb-3">
              <label for="exampleInputEmail1">Title:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-group mb-4">
              <label for="exampleInputPassword1">Description:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Description"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              ADD HERE
            </button>
          </form>
        </div>
      )}

      <div
        className="exam-div position-relative"
        style={{
          width: "100",
          // marginTop: "49px",
          padding: "40px",
          marginBottom: "20px",
        }}
      >
        {examsset.map((exam) => (
          <div
            key={exam.id}
            className="card"
            style={{ width: "18rem", margin: "20px" }}
          >
            <img src={image1} className="card-img-top" alt="Exam Cover" />
            <div className="card-body">
              <h5 className="card-title">{exam.title || "Untitled Exam"}</h5>
              <p className="card-text">
                {exam.description || "No description provided."}
              </p>
              <button
                onClick={() =>
                  navigate(`/admin/setpaper/${exam.id}/${exam.title}`)
                }
                href="#"
                className="btn btn-primary w-100"
              >
                SET PAPER
              </button>
              <button
                href="#"
                onClick={() => DeleteExam(exam.id)}
                className="btn btn-danger w-100 mt-2"
              >
                DELETE EXAM
                {exam.id}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Exams;
