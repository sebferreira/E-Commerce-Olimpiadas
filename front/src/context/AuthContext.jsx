/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useEffect, useState} from "react";
import {signIn, signUp, userLogout, verifyCookies} from "./../queryFn";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthRegistered, setIsAuthRegistered] = useState(false);
  const [loginErrors, setLoginErrors] = useState([]);
  const [registerErrors, setRegisterErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signup = async (value) => {
    const data = await signUp(value);
    if (data.length > 0) {
      return setRegisterErrors(data);
    }
    setUser(data);
    setIsAuthRegistered(true);
    setRegisterErrors([]);
  };

  const signin = async (value) => {
    const data = await signIn(value);
    if (data.length > 0) {
      return setLoginErrors(data);
    }
    setUser(data.user);
    Cookies.set("token", data.token);
    setIsAuthenticated(true);
    setLoginErrors([]);
  };

  const logout = () => {
    console.log("A");
    userLogout();
    setUser(null);
    setIsAuthenticated(false);
    setIsAuthRegistered(false);
  };
  useEffect(() => {
    if (registerErrors.length > 0) {
      const timer1 = setTimeout(() => {
        setRegisterErrors([]);
      }, 5000);
      return () => clearTimeout(timer1);
    }
    if (loginErrors.length > 0) {
      const timer2 = setTimeout(() => {
        setLoginErrors([]);
      }, 5000);
      return () => clearTimeout(timer2);
    }
  }, [loginErrors, registerErrors]);

  useEffect(() => {
    async function checkLogin() {
      const cookie = Cookies.get();
      if (!cookie.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
      const data = await verifyCookies();
      if (!data) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      setUser(data);
      setIsAuthenticated(true);
      setLoading(false);
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        loading,
        isAuthRegistered,
        isAuthenticated,
        loginErrors,
        registerErrors,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
