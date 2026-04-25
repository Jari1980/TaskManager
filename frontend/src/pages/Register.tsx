import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password }, setUser);
      navigate(routes.dashboard());
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ padding: 10, borderRadius: 4, border: "1px solid #ccc", background: "#1f2028", color: "#f3f4f6" }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: 10, borderRadius: 4, border: "1px solid #ccc", background: "#1f2028", color: "#f3f4f6" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: 10, borderRadius: 4, border: "1px solid #ccc", background: "#1f2028", color: "#f3f4f6" }}
        />
        <button
          type="submit"
          style={{
            padding: 10,
            borderRadius: 4,
            background: "#c084fc",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Register
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            padding: 10,
            borderRadius: 4,
            background: "#2e303a",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
}