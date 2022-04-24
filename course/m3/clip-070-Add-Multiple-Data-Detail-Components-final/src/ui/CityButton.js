import { useContext } from "react";
import { CityDetailStoreContext } from "../contexts/CityDetailStoreContext";

export default function CityButton({ city }) {
  const { setCityId } = useContext(CityDetailStoreContext);
  return (
    <button
      className="list-group-item list-group-item-action"
      onClick={(e) => {
        e.preventDefault();
        setCityId(city.id);
      }}
    >
      {city.name}
    </button>
  );
}
