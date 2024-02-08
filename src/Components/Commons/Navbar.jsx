import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import Swal from "sweetalert2";
import { toast } from "sonner";
import LoginModal from "../Login/LoginModal";

const Navbar = () => {
  const { logout, isLoggedIn, user } = useSession();

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Atencion",
      text: "Estas por cerrar tu sesion",
      icon: "warning",
      confirmButtonText: "Si, salir",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesion cerrada exitosamente");
        logout();
        sessionStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return (
    <header>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inutilisimas
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarInutilisimas"
            aria-controls="navbarInutilisimas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarInutilisimas">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) => {
                    isActive ? "active" : "";
                  }}`}
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink className={`nav-link`} to="/login">
                    Login
                  </NavLink>
                </li>
              )}
              {user?.isAdmin && (
                <li className="nav-item">
                  <NavLink className={`nav-link`} to="/admin">
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
            {isLoggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-danger"
              >
                Cerrar sesion
              </button>
            )}
          </div>
        </div>
      </nav> */}

      <nav className="navbar bg-base-100 fixed z-10">
        <div className="sm:navbar-start flex justify-between w-full">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="hover:text-red-500 lg:hidden"
            >
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
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink
                className={`font-semibold hover:text-red-500 ${({ isActive }) => {
                  isActive ? "active" : "";
                }}`}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              </li>
              <li>
              {!isLoggedIn && <LoginModal />}
              </li>
              {user?.isAdmin && (
              <li className="nav-item">
                <NavLink className='font-semibold hover:text-red-500' to="/admin">
                  Admin
                </NavLink>
              </li>
            )}

            </ul>

          </div>
          
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <Link className="text-2xl font-bold" to="/">
            The Recipe Book
          </Link>

        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="font-semibold flex gap-5">
            <li className="bg-transparent">
              <NavLink
                className={` hover:text-red-500 ${({ isActive }) => {
                  isActive ? "active" : "";
                }}`}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>{!isLoggedIn && <LoginModal />}</li>

            {user?.isAdmin && (
              <li className="hover:text-red-500">
                <NavLink className={`nav-link`} to="/admin">
                  Admin
                </NavLink>
              </li>
            )}


          </ul>
          
        </div>
        {isLoggedIn && (
          <button
            type="button"
            onClick={handleLogout}
            className="ms-2"
          >
            <span className="material-symbols-outlined">
logout
</span>
          </button>
        )}
        {/* <div className="navbar-end">{!isLoggedIn && <LoginModal />}</div> */}
      </nav>
    </header>
  );
};

export default Navbar;
