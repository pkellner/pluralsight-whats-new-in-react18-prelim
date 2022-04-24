import React, { createContext } from "react";
import { fetchCityListData } from "../dataApi/fetchCityListData";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children, displayCount }) {
  const resource = fetchCityListData(displayCount);
  const getCities = resource?.cities.read;

  const contextValue = {
    getCities,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
