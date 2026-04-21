import { useParams } from "react-router-dom";
import { mockTasks } from "../mock/data";

export default function TaskDetails() {
  const { taskId } = useParams<{ taskId: string }>();
  const task = mockTasks.find((t) => t.id === Number(taskId));

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
}
