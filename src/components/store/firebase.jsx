import {
  Children,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useNavigate } from "react-router";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4PlvwDNj18eZBdFduxe_ZvPGQyUus34",
  authDomain: "tdrtest-8881b.firebaseapp.com",
  projectId: "tdrtest-8881b",
  storageBucket: "tdrtest-8881b.firebasestorage.app",
  messagingSenderId: "353078192323",
  appId: "1:353078192323:web:f9c7f5311e532dca835a76",
};

const app = initializeApp(firebaseConfig);

// context decleration
export const FirebaseLink = createContext();

export const FirebaseStore = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, [auth]);

  const SignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        alert("LoggedIn Successfully");
      })
      .catch((error) => {
        alert(`${error}`);
      });
  };

  const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        alert("Login Successful");
        navigate("/admin/dashboard/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/admin/login/");
      })
      .catch(() => {
        alert("Logout Failed");
      });
  };

  return (
    <FirebaseLink.Provider value={{ user, SignUp, SignIn, Logout }}>
      {children}
    </FirebaseLink.Provider>
  );
};
