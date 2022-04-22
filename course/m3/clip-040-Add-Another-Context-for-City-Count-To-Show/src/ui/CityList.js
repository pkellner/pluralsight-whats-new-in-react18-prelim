import { useContext } from "react";
import { CityListStoreContext } from "../contexts/CityListStoreContext";

export default function CityList() {
  const { getCities } = useContext(CityListStoreContext);
  const cities = getCities();

  return (
    <>
      <h1>Cities by Population</h1>
      <ul className="list-group city--list">
        {cities?.map((rec) => (
          <li key={rec.id} className="list-group-item">
            {rec.name} {parseInt(rec.population).toLocaleString("en-US")}
          </li>
        ))}
      </ul>
    </>
  );
}
