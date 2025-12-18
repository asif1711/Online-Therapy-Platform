import { createContext, useContext, useState, ReactNode } from "react";

/**
 * 🔧 DEV MODE SWITCH
 * ------------------------------------
 * true  → Admin access enabled without login (for demo / UI work)
 * false → Normal auth flow (use this after demo / for final submission)
 *
 * ⚠️ IMPORTANT: MUST be false in production
 */
const DEV_ADMIN_MODE = true; // 👈 toggle this when needed

type Role = "admin" | "user" | null;

interface AuthContextType {
  isLoggedIn: boolean;
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    DEV_ADMIN_MODE
      ? true
      : localStorage.getItem("isLoggedIn") === "true"
  );

  const [role, setRole] = useState<Role>(
    DEV_ADMIN_MODE
      ? "admin"
      : (localStorage.getItem("role") as Role)
  );

  const login = (userRole: Role) => {
    setIsLoggedIn(true);
    setRole(userRole);

    if (!DEV_ADMIN_MODE) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", userRole || "");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
