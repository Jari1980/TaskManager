import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/user";
import { getMe, loginUser, registerUser } from "../api/auth";
import { api } from "../api/client";

interface AuthContextType {
  user: User | null;
  //setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  const login = async (email: string, password: string) => {
    const token = await loginUser({ email, password });
    localStorage.setItem("authToken", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const me = await getMe();
    setUser(me);
  };

  const register = async (name: string, email: string, password: string) => {
    const token = await registerUser({ name, email, password });
    localStorage.setItem("authToken", token);
  };

  //Load user on app start
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const me = await getMe();
        setUser(me);
      } catch (err) {
        console.error("Failed to fetch user", err);
        logout();
      }
    };

    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
