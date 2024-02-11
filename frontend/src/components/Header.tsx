import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between  ">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MyHoliday.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            className="flex items-center font-bold bg-white text-blue-600 px-3 hover:bg-gray-200  "
            to="/sign-in"
          >
            Sign IN
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
