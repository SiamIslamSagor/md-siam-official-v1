import v1Logo from "../assets/port-v1-logo.png";
const Navbar = () => {
  const link = (
    <>
      <div className="cursor-pointer px-5">
        <a>Item 1</a>
      </div>
      <div className="cursor-pointer px-5">
        <a>Item 2</a>
      </div>
      <div className="cursor-pointer px-5">
        <a>Item 3</a>
      </div>
    </>
  );
  return (
    <div className="container  mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="max-w-[220px]" src={v1Logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
          <div className="flex">
            <p className="px-5 text-gray-400">|</p>
            <a className="btn btn-neutral btn-sm">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
