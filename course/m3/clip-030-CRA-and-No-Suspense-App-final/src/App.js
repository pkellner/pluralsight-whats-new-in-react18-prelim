import "./App.css";import { Suspense } from "react";
import { fetchCityListData } from "./dataApi/fetchCityListData";

function RenderComponent({ resource }) {
  const cities = resource?.cities.read();

  return (
    <>
      <h2>Suspense in React 18 (Pluralsight Course)</h2>
      <ul className="list-group city--list">
        {cities?.map((rec) => (
          <li key={rec.id} className="list-group-item">
            {rec.name} {rec.population}
          </li>
        ))}
      </ul>
    </>
  );
}
function App({ displayCount }) {
  const resource = fetchCityListData(displayCount);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderComponent resource={resource} />
    </Suspense>
  );
}

export default App;
