import { useRef, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import ResNav from "./components/ResNav";
import { BrowserRouter, Routes, Route } from "react-router";
import MainComponents from "./components/MainComponents";
import AdminPanel from "./components/admin/AdminPanel";

// firebase
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAQ4PlvwDNj18eZBdFduxe_ZvPGQyUus34",
//   authDomain: "tdrtest-8881b.firebaseapp.com",
//   projectId: "tdrtest-8881b",
//   storageBucket: "tdrtest-8881b.firebasestorage.app",
//   messagingSenderId: "353078192323",
//   appId: "1:353078192323:web:f9c7f5311e532dca835a76",
// };

// const app = initializeApp(firebaseConfig);

function App() {
  const [navActive, setNavActive] = useState("Active");
  const [bodyActive, setBodyActive] = useState("NotActive");

  const [mobile, setMobile] = useState(false);

  function active() {
    console.log("Hi");
    setBodyActive("Active");
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              {/* <ResNav /> */}
              {mobile === true ? (
                <ResNav className="mobile-res" setMobile={setMobile} />
              ) : null}
              <Navbar
                navActive={navActive}
                setNavActive={setNavActive}
                bodyActive={bodyActive}
                setBodyActive={setBodyActive}
              ></Navbar>
              <Body
                navActive={navActive}
                setNavActive={setNavActive}
                bodyActive={bodyActive}
                setBodyActive={setBodyActive}
                active={active}
                mobile={mobile}
                setMobile={setMobile}
              >
                <MainComponents></MainComponents>
              </Body>
            </div>
          }
        ></Route>
        <Route path="/admin/*" element={<AdminPanel></AdminPanel>}></Route>
      </Routes>
    </>
  );
}

export default App;
