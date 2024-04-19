import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-cover bg-center h-screen md:h-auto ">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
