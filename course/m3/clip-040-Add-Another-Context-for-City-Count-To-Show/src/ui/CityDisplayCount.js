import { useContext } from "react";
import {DisplayCountContext} from "../contexts/DisplayCountContext";


export default function CityDisplayCount() {
  const { displayCount, setDisplayCount, setShowCityDetails } =
    useContext(DisplayCountContext);
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={
          displayCount === 3 ? "btn btn-secondary active" : "btn btn-secondary"
        }
        onClick={() => {
          setDisplayCount(3);
          setShowCityDetails(false);
        }}
      >
        3
      </button>
      <button
        type="button"
        className={
          displayCount === 5 ? "btn btn-secondary active" : "btn btn-secondary"
        }
        onClick={() => {
          setDisplayCount(5);
          setShowCityDetails(false);
        }}
      >
        5
      </button>
      <button
        type="button"
        className={
          displayCount === 10 ? "btn btn-secondary active" : "btn btn-secondary"
        }
        onClick={() => {
          setDisplayCount(10);
          setShowCityDetails(false);
        }}
      >
        10
      </button>
    </div>
  );
}
