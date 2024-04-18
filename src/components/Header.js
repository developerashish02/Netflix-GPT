import LOGO from "../assets/icons/Netflix_Logo.png";
const Header = () => {
  return (
    <div className="px-6 py-4 bg-gradient-to-b from-black">
      <img src={LOGO} className="h-20 cursor-pointer" />
    </div>
  );
};

export default Header;
