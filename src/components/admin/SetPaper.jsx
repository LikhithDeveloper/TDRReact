const SetPaper = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "70px 150px",
        }}
        className="container border rounded mt-5 w-75 d-flex flex-column mb-5"
      >
        <h5 className="display-6 mb-3 fs-2 ">ADD QUESTION</h5>
        <form>
          <div className="form-group mb-3">
            <label for="exampleInputEmail1">Question:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Question here"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label for="exampleInputPassword1">Option-1:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Option-1"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label for="exampleInputPassword1">Option-2:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Option-2"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label for="exampleInputPassword1">Option-3:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Option-3"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label for="exampleInputPassword1">Option-4:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Option-4"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label for="exampleInputPassword1">Answer:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
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
