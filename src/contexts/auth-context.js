import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({});
  const value = {user, setUser};
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
