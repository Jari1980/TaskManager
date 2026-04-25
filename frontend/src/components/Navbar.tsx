import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { routes } from "../router/routes";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header
      style={{
        padding: 12,
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold" }}>
        Task Manager {user ? `- Welcome, ${user.name}` : "- Guest"}
      </div>

      <div>
        {user ? (
          <button
            onClick={handleLogout}
            style={{
              color: "#d11a2a",
              fontWeight: 500,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to={routes.login()}
              style={{ marginRight: 8, textDecoration: "none" }}
            >
              Login
            </Link>
            <Link to={routes.register()} style={{ textDecoration: "none" }}>
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}