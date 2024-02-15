import { Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./index.css";

export const NavBar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
      state: {
        logged: false,
      },
    });
  };
  return (
    <>
      <header>
        <h1>
          <Link to={"/"}>Logo</Link>{" "}
        </h1>

        {state?.logged ? (
          <div className="user">
            <span className="username">{state?.name}</span>
            <button className="btn-logout" onClick={onLogout}>
              {" "}
              Cerrar Sesion
            </button>
          </div>
        ) : (
          <nav>
            <Link to={"/login"}> Iniciar Sesion </Link>
            <Link to={"/register"}> Registrarse </Link>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
