import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Teams from "../pages/Teams";
import TeamDetails from "../pages/TeamDetails";
import ProjectDetails from "../pages/ProjectDetails";
import TaskDetails from "../pages/TaskDetails";
import Register from "../pages/Register";
import { AuthProvider } from "../context/AuthContext";
import AuthLayout from "../layouts/AuthLayout";
import { routes } from "../router/routes";
import { ThemeProvider } from "../context/ThemeContext";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";
import AdminRoute from "./AdminRoute";
import AdminLayout from "../layouts/AdminLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route
                element={
                  <AuthLayout
                    bottomLink={{
                      text: "Already have an account? Login",
                      to: routes.login(),
                    }}
                  />
                }
              >
                <Route path="/register" element={<Register />} />
              </Route>
            </Route>

            {/* Protected Layout */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />

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

              <Route element={<AdminRoute />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin" element={<Admin />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
