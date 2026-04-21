import { Link } from "react-router-dom";
import { mockUser, mockTeams, mockProjects } from "../mock/data";
import { routes } from "../router/routes";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {mockUser.name}</p>

      <h2>Your Teams</h2>

      {mockTeams.map((team) => (
        <div key={team.id}>
          <Link to={routes.team(team.id)}>{team.name}</Link>
        </div>
      ))}

      <h2>All Projects</h2>

      {mockProjects.map((project) => {
        const team = mockTeams.find((t) => t.id === project.teamId);

        return (
          <div key={project.id}>
            <Link to={routes.project(project.teamId, project.id)}>
              {project.name}
            </Link>

            <span style={{ marginLeft: 8, color: "#666" }}>({team?.name})</span>
          </div>
        );
      })}
    </div>
  );
}
