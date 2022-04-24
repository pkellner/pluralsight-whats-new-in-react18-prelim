import "./App.css";
import { topCities } from "./data/cities";

export default function CityList({ displayCount }) {
  const data = topCities(displayCount);
  return (
    <ul>
      {data.slice(0, displayCount).map((rec) => (
        <li key={rec.id}>{rec.name}</li>
      ))}
    </ul>
  );
}
