import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />

        <main style={{ padding: 16, flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
