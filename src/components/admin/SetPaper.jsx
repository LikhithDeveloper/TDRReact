import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { FirebaseLink } from "../store/firebase";

const SetPaper = () => {
  const formRef = useRef(null);
  const { id } = useParams();
  const { AddQuestion, GetPaper } = useContext(FirebaseLink);

  useEffect(() => {
    const questionData = () => {
      const data = GetPaper(id);
      console.log(data);
    };
    questionData();
  }, []);

  const handelForm = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const question = data.get("question");
    const image = data.get("image"); // Image file
    const opt1 = data.get("opt1");
    const opt2 = data.get("opt2");
    const opt3 = data.get("opt3");
    const opt4 = data.get("opt4");
    const answer = data.get("answer");

    // Convert image to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result; // Base64 encoded string
      AddQuestion(id, question, base64Image, opt1, opt2, opt3, opt4, answer);
    };
    reader.onerror = () => {
      alert("Failed to read the image file");
    };

    reader.readAsDataURL(image); // Trigger Base64 conversion

    // Reset the form after submission
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "70px 150px",
        }}
        className="container border rounded mt-5 w-75 d-flex flex-column mb-5"
      >
        <h5 className="display-6 mb-3 fs-2">ADD QUESTIONS</h5>
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
              id="option2"
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
              id="option3"
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
              id="option4"
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
    </>
  );
};

export default SetPaper;
