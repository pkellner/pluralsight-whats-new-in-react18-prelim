import React, { createContext, useState } from "react";

export const DisplayCountContext = createContext();

function DisplayCountProvider({ children, initialDisplayCount }) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const contextValue = {
    displayCount,
    setDisplayCount,
  };

  return (
    <DisplayCountContext.Provider value={contextValue}>
      {children}
    </DisplayCountContext.Provider>
  );
}

export { DisplayCountProvider };
