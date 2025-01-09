import { useRef, useState, useContext } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import ResNav from "./components/ResNav";
import { BrowserRouter, Routes, Route } from "react-router";
import MainComponents from "./components/MainComponents";
import AdminPanel from "./components/admin/AdminPanel";
import { FirebaseLink, FirebaseStore } from "./components/store/firebase";

function App() {
  const [navActive, setNavActive] = useState("Active");
  const [bodyActive, setBodyActive] = useState("NotActive");

  const [mobile, setMobile] = useState(false);

  function active() {
    console.log("Hi");
    setBodyActive("Active");
  }

  return (
    <FirebaseStore>
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
    </FirebaseStore>
  );
}

export default App;
