import image1 from "../../assets/cover-pic---b2b-portals---eng.png";
import "./Exam.css";
const Exam = () => {
  return (
    <div
      className="exam-div"
      style={{
        width: "100",
        height: "100vh",
        marginTop: "49px",
        padding: "40px",
        marginBottom: "20px",
      }}
    >
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">EAPCET TEST-1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary w-100">
            Attempt
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">EAPCET TEST-1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary w-100">
            Attempt
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">EAPCET TEST-1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary w-100">
            Attempt
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">EAPCET TEST-1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary w-100">
            Attempt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Exam;
