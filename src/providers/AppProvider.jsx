import { useTravel, ContextTravel } from "hooks/useTravel";
import React from "react";

const AppProvider = (props) => {
  const { children } = props;

  const travel = useTravel();

  return (
    <ContextTravel.Provider value={travel}>{children}</ContextTravel.Provider>
  );
};

export { AppProvider };
