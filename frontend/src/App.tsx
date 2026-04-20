import {mockTasks} from "./mock/data";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      {mockTasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  )
}

export default App
