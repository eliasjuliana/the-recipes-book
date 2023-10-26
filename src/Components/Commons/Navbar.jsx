import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Navbar = () => {

  const {logout, isLoggedIn, user} = useSession();

  const navigate = useNavigate();

  const handleLogout = () =>{
    Swal.fire({
      title: 'Atencion',
      text: 'Estas por cerrar tu sesion',
      icon: "warning",
      confirmButtonText: 'Si, salir',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    }).then((res)=>{
      if(res.isConfirmed){
        toast.success('Sesion cerrada exitosamente')
        logout();
        navigate('/');
      }
    })
  }

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
              {!isLoggedIn && (<li className="nav-item">
                <NavLink className={`nav-link`} to="/login">
                  Login
                </NavLink>
              </li>)}
              {user?.isAdmin && (<li className="nav-item">
                <NavLink className={`nav-link`} to="/admin">
                  Admin
                </NavLink>
              </li>)}
            </ul>
            {isLoggedIn && (<button type='button' onClick={handleLogout} className="btn btn-danger">Cerrar sesion</button>)}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
