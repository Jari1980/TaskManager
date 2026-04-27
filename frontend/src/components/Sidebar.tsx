import { NavLink } from "react-router-dom";
import { routes } from "../router/routes";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menu</h3>

      <nav className="sidebar-nav">
        <NavLink
          to={routes.dashboard()}
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to={routes.teams()}
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Teams
        </NavLink>
      </nav>
    </aside>
  );
}