import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { routes } from "../router/routes";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isAboutPage = location.pathname === routes.about();

  const handleLogout = () => {
    logout();
    //small delay to ensure state clears so user gets back to login screen
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 0);
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
        {isAboutPage ? (
          <Link
            to={routes.dashboard()}
            className="navbar-button"
            style={{ marginRight: 12 }}
          >
            Home
          </Link>
        ) : (
          <Link
            to={routes.about()}
            className="navbar-button"
            style={{ marginRight: 12 }}
          >
            About
          </Link>
        )}
        {location.pathname === "/admin" && (
          <Link
            to={routes.dashboard()}
            className="navbar-button"
            style={{ marginRight: 12 }}
          >
            Back to App
          </Link>
        )}
        {user?.role === "ADMIN" && !isAdminPage && (
          <Link
            to={routes.admin()}
            className="navbar-button"
            style={{ marginRight: 12 }}
          >
            Admin Panel
          </Link>
        )}
        {user ? (
          <button onClick={handleLogout} className="navbar-button">
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
