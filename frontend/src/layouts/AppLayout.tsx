import { Outlet, NavLink, Link } from "react-router-dom";
import { routes } from "../router/routes";

const navStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "bold" : "normal",
  color: isActive ? "#2563eb" : "#333",
  textDecoration: "none",
  padding: "4px 6px",
  borderRadius: 4,
  background: isActive ? "#e0ecff" : "transparent",
});

export default function AppLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          padding: 16,
          background: "#f3f3f3",
        }}
      >
        <h3 style={{ marginBottom: 12 }}>Menu</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <NavLink to={routes.dashboard()} style={navStyle}>
            Dashboard
          </NavLink>

          <NavLink to={routes.teams()} style={navStyle}>
            Teams
          </NavLink>
        </nav>
      </aside>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <header
          style={{
            padding: 12,
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Task Manager</div>

          <Link
            to={routes.login()}
            style={{
              color: "#d11a2a",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Logout
          </Link>
        </header>

        {/* Page content */}
        <main style={{ padding: 16, flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}