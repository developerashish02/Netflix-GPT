import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { useDispatch } from "react-redux";
import { addUserInfo } from "./features/userSlice";
import { BACKGROUND_IMG } from "./utils/constants";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;

        dispatch(addUserInfo({ displayName, email, uid }));
        navigate("/browse");
      } else {
      }
    });
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      className="bg-cover bg-center h-screen md:h-auto "
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
