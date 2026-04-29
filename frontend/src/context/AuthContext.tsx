import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/user";
import { getMe } from "../api/auth";


interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  //Load user on app start
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const me = await getMe(); //Currently mocked
        setUser(me);
      } catch (err) {
        console.error("Failed to fetch user", err);
        logout();
      }
    };

    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
