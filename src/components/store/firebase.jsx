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
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4PlvwDNj18eZBdFduxe_ZvPGQyUus34",
  authDomain: "tdrtest-8881b.firebaseapp.com",
  projectId: "tdrtest-8881b",
  storageBucket: "tdrtest-8881b.firebasestorage.app",
  messagingSenderId: "353078192323",
  appId: "1:353078192323:web:f9c7f5311e532dca835a76",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// context decleration
export const FirebaseLink = createContext();

export const FirebaseStore = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ex, setEx] = useState(1);

  const auth = getAuth();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Update loading state once user state is determined
    });

    return () => unsubscribe();
  }, []);

  // Exams Creation
  const AddExams = async (title, description) => {
    try {
      const doc = await addDoc(collection(db, "Exams"), {
        title: title,
        description: description,
      });
      setEx(ex + 1);
      alert("Exam Created successfully");
    } catch (e) {
      alert("Error: ", e);
    }
  };

  // Paper data
  const AddQuestion = async (
    id,
    question,
    base64Image,
    opt1,
    opt2,
    opt3,
    opt4,
    answer
  ) => {
    try {
      const query = collection(db, "Exams", id, "Questions");
      await addDoc(query, {
        question: question,
        image: base64Image,
        opt1: opt1,
        opt2: opt2,
        opt3: opt3,
        opt4: opt4,
        answer: answer,
      });
      alert("Question is added");
    } catch (error) {
      alert("Can't able to add the question");
    }
  };

  // Get Papers

  const GetPaper = async (id) => {
    try {
      const query = collection(db, "Exams", id, "Questions");
      const questionData = await getDocs(query);
      const ques = [];
      questionData.forEach((element) => {
        ques.push({ id: element.id, ...element.data() });
      });

      return ques;
    } catch (error) {
      alert("Getting Server Error");
    }
  };

  // Exam Deletion
  const DeleteExamList = async (id) => {
    try {
      await deleteDoc(doc(db, "Exams", id));
      setEx(ex - 1);
      alert("Exam deleted successfully");
    } catch (e) {
      alert("Error: ", e);
    }
  };

  // SIGNUP
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

  //SIGNIN
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

  //LOGOUT
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
    <FirebaseLink.Provider
      value={{
        user,
        SignUp,
        SignIn,
        Logout,
        loading,
        AddExams,
        db,
        ex,
        setEx,
        DeleteExamList,
        AddQuestion,
        GetPaper,
      }}
    >
      {children}
    </FirebaseLink.Provider>
  );
};
