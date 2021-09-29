import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  accessToken: string;
}>({
  isLoggedIn: false,
  accessToken: "",
});
const useAuth = () => {
  return useContext(AuthContext);
};

const loginURL = import.meta.env?.VITE_LOGIN_URL as string;
const apiKey = import.meta.env?.VITE_API_KEY as string;

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [accessToken, setaccessToken] = useState<string>("");
  useEffect(() => {
    fetch(loginURL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ key: apiKey }),
    })
      .then((res) => res.json())
      .then((r) => {
        setaccessToken(r.access_token);
        setisLoggedIn(true);
      });
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
