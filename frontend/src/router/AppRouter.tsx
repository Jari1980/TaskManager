import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Teams from "../pages/Teams";
import TeamDetails from "../pages/TeamDetails";
import ProjectDetails from "../pages/ProjectDetails";
import TaskDetails from "../pages/TaskDetails";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetails />} />

          <Route
            path="/teams/:teamId/projects/:projectId"
            element={<ProjectDetails />}
          />

          <Route
            path="/teams/:teamId/projects/:projectId/tasks/:taskId"
            element={<TaskDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
