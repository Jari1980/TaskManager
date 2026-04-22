import { useParams, Link } from "react-router-dom";
import { routes } from "../router/routes";
import { useEffect, useState } from "react";
import { getTeamById } from "../api/teams";
import { getProjectsByTeam } from "../api/projects";
import type { Team } from "../types/team";
import type { Project } from "../types/project";

export default function TeamDetails() {
  const { teamId } = useParams<{ teamId: string }>();

  const [team, setTeam] = useState<Team | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!teamId) return;

    Promise.all([
      getTeamById(Number(teamId)),
      getProjectsByTeam(Number(teamId)),
    ])
      .then(([teamData, projectData]) => {
        setTeam(teamData);
        setProjects(projectData);
      })
      .finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <div>Loading...</div>;

  if (!team) return <div>Team not found</div>;

  return (
    <div>
      <h1>{team.name}</h1>
      <p>{team.description}</p>

      <h2>Projects</h2>

      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        projects.map((project) => (
          <div key={project.id}>
            <Link to={routes.project(team.id, project.id)}>{project.name}</Link>
          </div>
        ))
      )}
    </div>
  );
}
