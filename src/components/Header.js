import LOGO from "../assets/icons/Netflix_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { removeUserInfo } from "../features/userSlice";

const Header = () => {
  const user = useSelector((store) => store?.user?.userInfo);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        dispatch(removeUserInfo());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-gradient-to-b from-black  flex justify-between items-center px-8 py-3 w-full absolute z-10">
      <img
        src={LOGO}
        className="h-16 sm:h-20 md:h-24 lg:h-16 xl:h-16 cursor-pointer"
        alt="Netflix Logo"
      />

      {user && (
        <button
          className="text-white bg-red-500 hover:bg-red-400  px-4 py-2 rounded-md transition-all ease-in-out "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
