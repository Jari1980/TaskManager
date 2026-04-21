import { useParams, Link } from "react-router-dom";
import { mockTeams, mockProjects } from "../mock/data";
import { routes } from "../router/routes";

export default function TeamDetails() {
  const { teamId } = useParams<{ teamId: string }>();
  const team = mockTeams.find((t) => t.id === Number(teamId));
  if (!team) {
    return <div>Team not found</div>;
  }
  const teamProjects = mockProjects.filter((p) => p.teamId === team.id);

  return (
    <div>
      <h1>{team.name}</h1>
      <p>{team.description}</p>

      <h2>Projects</h2>

      {teamProjects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        teamProjects.map((project) => (
          <div key={project.id}>
            <Link to={routes.project(team.id, project.id)}>{project.name}</Link>
          </div>
        ))
      )}
    </div>
  );
}
