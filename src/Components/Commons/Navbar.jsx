import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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
                <NavLink className={`nav-link ${({isActive})=>{isActive? 'active' : ''}}`} aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link`} to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link`} to="/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
