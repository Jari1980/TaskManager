import { useParams, Link } from "react-router-dom";
import { mockProjects, mockTasks } from "../mock/data";
import { routes } from "../router/routes";

export default function ProjectDetails() {
  const { projectId, teamId } = useParams<{
    projectId: string;
    teamId: string;
  }>();

  const project = mockProjects.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  const projectTasks = mockTasks.filter((t) => t.projectId === project.id);

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <h2>Tasks</h2>

      {projectTasks.map((task) => (
        <div key={task.id}>
          <Link to={routes.task(Number(teamId), project.id, task.id)}>
            {task.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
