import LOGO from "../assets/icons/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="px-6 py-4 bg-gradient-to-b from-black w-full">
      <img
        src={LOGO}
        className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 cursor-pointer"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;
