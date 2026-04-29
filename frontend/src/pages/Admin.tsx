import { useEffect, useState } from "react";
import type { User, Role } from "../types/user";
import { getUsers, deleteUser, changeUserRole } from "../api/admin";

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const handleToggleRole = async (user: User) => {
    const newRole: Role = user.role === "ADMIN" ? "USER" : "ADMIN";

    await changeUserRole(user.id, newRole);

    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, role: newRole } : u)),
    );
  };

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);

    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Panel</h1>
      <h1 className="adminSub-title">Users</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>

              <td>
                <div className="admin-actions">
                  <button className="btn" onClick={() => handleToggleRole(u)}>
                    {u.role === "ADMIN" ? "Make User" : "Make Admin"}
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(u.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
