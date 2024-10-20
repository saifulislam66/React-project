import React, { createContext, useState } from "react";
import { getLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const data = getLocalStorage();
  console.log(data);
  return (
    <div>
      <AuthContext.Provider value={"demo data"}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
