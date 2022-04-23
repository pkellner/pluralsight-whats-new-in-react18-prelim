import { useContext, Fragment } from "react";
import { CityListStoreContext } from "../contexts/CityListStoreContext";
import { CityDetailStoreProvider } from "../contexts/CityDetailStoreContext";
import CityButton from "./CityButton";

export default function CityList({ children }) {
  const { getCities } = useContext(CityListStoreContext);
  const cities = getCities();

  return (
    <CityDetailStoreProvider initialCityId={cities[0].id}>
      <div className="row">
        <div className="col-3">
          <ul className="list-group city--list">
            <li className="list-group-item city--header">City list</li>
            {cities.map((city) => {
              return (
                <Fragment key={city.id}>
                  <CityButton city={city} />
                </Fragment>
              );
            })}
          </ul>
        </div>
        <div className="col-9">
          <div className="city--details">
            <div className="list-group-item  city--header">City details</div>
            {children}
          </div>
        </div>
      </div>
    </CityDetailStoreProvider>
  );
}
