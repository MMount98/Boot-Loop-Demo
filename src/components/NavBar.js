export default function NavBar() {
  return (
    // NavBar Component from DaisyUI (Refactored to be used for what The Client Needs)
    <>
      <div className="navbar z-50 bg-secondary sticky top-0 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-Oswald text-lg"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl font-Oswald text-primary">
            Boot Loop
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        </div>
        <div className="navbar-end">
          <a className="btn font-Oswald text-lg bg-primary text-neutral">Contact Us</a>
        </div>
      </div>
    </>
  );
}
