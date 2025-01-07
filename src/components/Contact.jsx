import "./styles/Contact.css";
import { MdMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useRef, useState } from "react";

const Contact = () => {
  // function submit(e) {
  //   e.preventDefault();
  //   console.log("Form submitted!");
  // }
  const [result, setResult] = useState("");
  const ref = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    ref.current.disabled = true;
    setResult("Sending....");
    ref.current.style.cursor = "not-allowed";
    setInterval(() => {
      ref.current.style.cursor = "pointer";
      ref.current.type = "disable";
      ref.current.innerHtml = "Submit";
      ref.current.disabled = false;
    }, 2000);
    const formData = new FormData(event.target);

    formData.append("access_key", "34e5c971-3cf8-4524-9fb8-0c0f6810ba9b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-main">
        <div className="header">
          <h3>
            <b>Get In Touch</b>
          </h3>
          <p style={{ fontSize: "15px", fontWeight: "500" }}>
            Have a Project in Mind? Let's work together to create something
            amazing
          </p>
        </div>
        <div className="contact-body">
          <div className="contact-body-data">
            <div className="contact-body-data-card">
              <div className="contact-body-data-card-head">
                <h3>Contact Information</h3>
              </div>
              <div className="contact-body-data-card-body">
                <div className="email">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "25px",
                      color: "blue",
                      paddingLeft: "10px",
                    }}
                  >
                    <MdMailOutline />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ margin: "0", paddingLeft: "10px" }}>E-mail</p>
                    <p
                      style={{
                        margin: "0",
                        paddingLeft: "10px",
                        color: "rgba(0, 0, 0, 0.68)",
                      }}
                    >
                      likhith931@gmail.com
                    </p>
                  </div>
                </div>
                <div className="email">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "25px",
                      color: "blue",
                      paddingLeft: "10px",
                    }}
                  >
                    <MdOutlinePhone />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ margin: "0", paddingLeft: "10px" }}>Phone</p>
                    <p
                      style={{
                        margin: "0",
                        paddingLeft: "10px",
                        color: "rgba(0, 0, 0, 0.68)",
                      }}
                    >
                      +91 8897905157
                    </p>
                  </div>
                </div>
                <div className="email">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "25px",
                      color: "blue",
                      paddingLeft: "10px",
                    }}
                  >
                    <IoLocationOutline />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ margin: "0", paddingLeft: "10px" }}>Location</p>
                    <p
                      style={{
                        margin: "0",
                        paddingLeft: "10px",
                        color: "rgba(0, 0, 0, 0.68)",
                      }}
                    >
                      Sompeta, Srikakulam, AP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-body-form">
            <div className="form-container">
              <form onSubmit={onSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value="34e5c971-3cf8-4524-9fb8-0c0f6810ba9b"
                ></input>
                <label>Name:</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  id="name-inp"
                  placeholder="Enter your name"
                />
                <br></br>
                <br></br>
                <label>Email:</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  id="name-inp"
                  placeholder="Enter your email"
                />
                <br />
                <br />
                <label>Message:</label>
                <br></br>
                <textarea
                  name="message"
                  id="name-inp"
                  placeholder="Enter your message"
                  rows="6"
                  cols="6"
                  style={{
                    width: "300px",
                    height: "60px",
                    // border: "1px solid rgba(0, 0, 0, 0.332)",
                    // borderRadius: "5px",
                    // padding: "10px",
                    fontFamixly: "Arial, sans-serif",
                    fontSize: "14px",
                    resize: "vertical",
                    backgroundColor: "white",
                  }}
                ></textarea>
                <br />
                <br />
                <button type="submit" className="btn" ref={ref}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
