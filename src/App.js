import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { useDispatch } from "react-redux";
import { addUserInfo } from "./features/userSlice";

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
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-cover bg-center h-screen md:h-auto ">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
