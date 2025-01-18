import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { FirebaseLink } from "../store/firebase";

const SetPaper = () => {
  const formRef = useRef(null);
  const { id, exam } = useParams();
  const { AddQuestion, GetPaper, setEx2, ex2, DeleteQuestion } =
    useContext(FirebaseLink);
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const questionData = async () => {
      try {
        const fetchedData = await GetPaper(id); // Await the promise
        setData(fetchedData); // Set the resolved data
        // console.log(fetchedData);
        setSpin(true);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    questionData();
  }, [id, GetPaper, ex2]);

  const handelForm = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const question = data.get("question");
    const image = data.get("image");
    const opt1 = data.get("opt1");
    const opt2 = data.get("opt2");
    const opt3 = data.get("opt3");
    const opt4 = data.get("opt4");
    const answer = data.get("answer");

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      AddQuestion(id, question, base64Image, opt1, opt2, opt3, opt4, answer);
    };
    reader.onerror = () => {
      alert("Failed to read the image file");
    };

    reader.readAsDataURL(image);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      {!spin ? (
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
        <div>
          <div
            style={{
              width: "100%",
              padding: "70px 150px",
            }}
            className="container border rounded mt-5 w-75 d-flex flex-column mb-5"
          >
            <h5 className="display-6 mb-3 fs-2">ADD QUESTIONS FOR {exam}</h5>
            <form ref={formRef} onSubmit={handelForm}>
              <div className="form-group mb-3">
                <label htmlFor="question">Question:</label>
                <input
                  type="text"
                  name="question"
                  className="form-control"
                  id="question"
                  placeholder="Question here"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="image">Add Image:</label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  id="image"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="option1">Option-1:</label>
                <input
                  type="text"
                  name="opt1"
                  className="form-control"
                  id="opt1"
                  placeholder="Option-1"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="option2">Option-2:</label>
                <input
                  type="text"
                  name="opt2"
                  className="form-control"
                  id="opt2"
                  placeholder="Option-2"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="option3">Option-3:</label>
                <input
                  type="text"
                  name="opt3"
                  className="form-control"
                  id="opt3"
                  placeholder="Option-3"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="option4">Option-4:</label>
                <input
                  type="text"
                  name="opt4"
                  className="form-control"
                  id="opt4"
                  placeholder="Option-4"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="answer">Answer:</label>
                <input
                  type="text"
                  name="answer"
                  className="form-control"
                  id="answer"
                  placeholder="Answer"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
          <div style={{ width: "100%", padding: "50px 50px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Question</th>
                  <th scope="col">Image</th>
                  <th scope="col">Option-1</th>
                  <th scope="col">Option-2</th>
                  <th scope="col">Option-3</th>
                  <th scope="col">Option-4</th>
                  <th scope="col">Answer</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {data.map((question, index) => (
                  <tr key={question.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{question.question}</td>
                    <td>
                      {question.image && (
                        <img
                          src={question.image}
                          alt="Question"
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </td>
                    <td>{question.opt1}</td>
                    <td>{question.opt2}</td>
                    <td>{question.opt3}</td>
                    <td>{question.opt4}</td>
                    <td>{question.answer}</td>
                    {/* <td className="btn btn-primary w-100 m-1">+ Edit</td> */}
                    <td>
                      <button
                        className="btn w-100 btn-danger"
                        onClick={() => DeleteQuestion(id, question.id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default SetPaper;
