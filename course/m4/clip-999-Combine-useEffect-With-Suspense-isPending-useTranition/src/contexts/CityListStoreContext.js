import React, {createContext, useContext, useEffect, useState, useTransition} from "react";
import { fetchCityListData } from "../dataApi/fetchCityListData";
import { DisplayCountContext } from "./DisplayCountContext";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children }) {
  const [isPending, startTransition] = useTransition();
  const { displayCount } = useContext(DisplayCountContext);
  const [resource, setResource] = useState(fetchCityListData(displayCount));
  
  const getCities = resource?.cities.read;
  
  useEffect(() => {
    startTransition(() => {
      setResource(fetchCityListData(displayCount));
    });
  }, [displayCount]);

  const contextValue = {
    getCities,
    isPending,
    startTransition,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
