import LOGO from "../assets/icons/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black w-full flex justify-between items-center px-8 py-3">
      <img
        src={LOGO}
        className="h-16 sm:h-20 md:h-24 lg:h-16 xl:h-16 cursor-pointer"
        alt="Netflix Logo"
      />

      <button className="text-white bg-red-500 hover:bg-red-400  px-4 py-2 rounded-md transition-all ease-in-out">
        Sign Out
      </button>
    </div>
  );
};

export default Header;
