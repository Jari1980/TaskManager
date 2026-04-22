import { useParams, Link } from "react-router-dom";
import { mockProjects } from "../mock/data";
import { routes } from "../router/routes";
import { useEffect, useState } from "react";
import { getTasksByProject } from "../api/tasks";
import type { Task } from "../types/task";

export default function ProjectDetails() {
  const { projectId, teamId } = useParams<{
    projectId: string;
    teamId: string;
  }>();

  const project = mockProjects.find((p) => p.id === Number(projectId));

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) return;

    getTasksByProject(Number(projectId))
      .then(setTasks)
      .finally(() => setLoading(false));
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <h2>Tasks</h2>

      {loading && <p>Loading...</p>}

      {!loading &&
        tasks.map((task) => (
          <div key={task.id}>
            <Link to={routes.task(Number(teamId), project.id, task.id)}>
              {task.title}
            </Link>
          </div>
        ))}
    </div>
  );
}
