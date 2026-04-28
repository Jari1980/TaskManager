import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../api/auth";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      // loginUser now returns just a string token
      const token: string = await loginUser({ email, password });

      // save token to localStorage
      localStorage.setItem("authToken", token);

      // temporarily set a mock user until /me endpoint is ready
      setUser({ name: "Mock User", email });

      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      setError(err.response?.data || err.message || "Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          boxShadow: "var(--shadow)",
          width: "100%",
          maxWidth: "400px",
          padding: "40px",
          color: "var(--text)",
        }}
      >
        <h1 style={{ color: "var(--text-h)", marginBottom: "24px" }}>Login</h1>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            required
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              fontSize: "14px",
              color: "var(--text)",
              background: "var(--bg)",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
            required
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              fontSize: "14px",
              color: "var(--text)",
              background: "var(--bg)",
            }}
          />
        </div>

        {error && (
          <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--accent)",
            color: "var(--bg)",
            border: "none",
            borderRadius: "8px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--border)",
            color: "var(--text)",
            border: "none",
            borderRadius: "8px",
            marginTop: "12px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
}