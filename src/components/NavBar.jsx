import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineSquaresPlus } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex mb-2 lg:mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <span className="text-2xl"><HiOutlineSquaresPlus /></span>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-30 text-[#150B2BB3]">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl lg:text-3xl font-bold text-[#150B2B]">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-[#150B2BB3]">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex text-[#150B2BB3] text-base font-normal">
            <label className="input flex items-center gap-2 rounded-full bg-[#150B2B0D]">
            <IoSearchOutline />
              <input id="search" type="text" className="grow" placeholder="Search" />
            </label>
          </div>
         <span className="text-3xl text-[#150B2B] bg-[#0BE58A] rounded-full p-2 m-2"><a href=""><CgProfile /></a></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;