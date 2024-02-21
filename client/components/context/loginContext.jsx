import React from "react";

export const LoginContext = React.createContext({
  user: undefined,
  clientId: undefined,
  userType: undefined,
  setUser: () => {},
  setUserType: () => {},
  loadUser: () => {},
});
