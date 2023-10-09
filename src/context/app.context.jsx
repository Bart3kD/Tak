import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [slider, setSlider] = useState(true);
  const [logged, setLogged] = useState(false);

  return (
    <AppContext.Provider value={{ slider, setSlider, logged, setLogged }}>
      {children}
    </AppContext.Provider>
  );
};
