import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MatrixBackground from "../components/MatrixBackground";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1, 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, var(--accent-bg), transparent)",
        padding: 24,
        paddingBottom: 0,
      }}
    >
      <MatrixBackground />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={logo}
          alt="TaskManager logo"
          style={{
            height: 150,
            marginBottom: 16,
            display: "block",
          }}
        />
        <h1 className="modified-title">Task Manager</h1>

        <p style={{ color: "var(--text)", marginBottom: 20, marginTop:20 }}>
          Organize teams, projects and tasks in one place.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Link
            to="/login"
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              background: "var(--accent)",
              color: "white",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>

          <Link
            to="/register"
            style={{
              padding: "10px 16px",
              border: "1px solid var(--border)",
              borderRadius: 8,
              textDecoration: "none",
              color: "var(--text)",
            }}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
