import { createContext, useState } from "react";

//-> 1.  Creating the context

const UserContext = createContext(undefined);
//const UserDispatchContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

// exports
export { UserProvider, UserContext };
