import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { FormEvent } from "react";

const RegisterPage = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { name, email, password } = formState;

  const onRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };
  return (
    <div className="wrapper">
      <form onSubmit={onRegister}>
        <h1>Registrarse</h1>
        <div className="input-group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Nombre: </label>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Email: </label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Contraseña: </label>
        </div>

        <button>Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
