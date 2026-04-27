import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { routes } from "../router/routes";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(routes.home(), { replace: true });
  };

  return (
    <header className="navbar">
      <div className="navbar-title">
        Task Manager {user ? `- ${user.name}` : "- Guest"}
      </div>

      <div>
        <button
          onClick={toggleTheme}
          style={{
            marginRight: 12,
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "4px 8px",
            cursor: "pointer",
            color: "var(--text)",
          }}
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--accent-bg)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to={routes.login()} className="navbar-link">
              Login
            </Link>
            <Link to={routes.register()} className="navbar-link">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
