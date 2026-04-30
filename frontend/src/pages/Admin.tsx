import { useEffect, useState } from "react";
import type { User, Role } from "../types/user";
import { getUsers, deleteUser, changeUserRole } from "../api/admin";

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

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
      const data = await getUsers(currentPage, pageSize);
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    if (users.length === 1 && currentPage > 0) {
      setCurrentPage((p) => p - 1);
    } else {
      loadUsers();
    }

    //setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    loadUsers();
  }, [currentPage, pageSize]);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Panel</h1>
      <h1 className="adminSub-title">Users</h1>

      <div className="admin-controls">
        <label>Users per page: </label>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(0);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
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
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>

        <span>
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={currentPage >= totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
