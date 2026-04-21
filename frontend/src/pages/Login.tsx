import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    //TODO: replace with real auth later
    localStorage.setItem("isAuthenticated", "true");

    navigate(routes.dashboard());
  }

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input type="email" placeholder="email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
