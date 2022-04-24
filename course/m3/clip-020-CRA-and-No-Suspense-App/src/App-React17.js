import { useEffect, useState } from "react";
import "./App.css";
import { topCities } from "./data/cities";

export default function App({ displayCount }) {
  const [cities, setCities] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCities(displayCount).then((data) => {
      setCities(data);
      setLoading(false);
    });
  });

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <h1>React 17</h1>
      <ul>
        {cities.slice(0, displayCount).map((rec) => (
          <li key={rec.id}>{rec.name}</li>
        ))}
      </ul>
    </>
  );
}

/////

const fetchCities = (displayCount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(topCities(displayCount));
    }, 2000);
  });
};
