import React, { createContext } from "react";
const ContextAuth = createContext();
import * as firebase from "./firebase";

export default ContextAuth;
const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
      userToken: null,
    }
  );

  const listenerUser = (user) => {
    dispatch({ type: "SIGN_IN", user: user });
  };

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      firebase.onChangeUser(listenerUser);
    };

    bootstrapAsync();
  }, []);

  const action = React.useMemo(
    () => ({
      signIn: async ({ email, password }) => {
        return firebase
          .loginEmail({email, password})
          .then(async (result) => dispatch({ type: "SIGN_IN", user: result.user }));
      },
      signOut: async () => {
        return firebase.logout().then(async (result) => dispatch({ type: "SIGN_OUT" }));
      },
      signUp: async ({ email, password} ) => {
        return firebase
          .createUser({email, password})
          .then(async (result) => dispatch({ type: "SIGN_IN", user: result.user }));
      },
    }),
    []
  );
  return (
    <ContextAuth.Provider value={{ action, state }}>
      {children}
    </ContextAuth.Provider>
  );
};

export { AuthProvider };
