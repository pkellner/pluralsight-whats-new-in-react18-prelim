import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { fetchCityListData } from "./dataApi/fetchCityListData";

function RenderComponent({ resource }) {
  const cities = resource?.cities.read();

  return (
    <>
      <h2>Suspense in React 18 (Pluralsight Course)</h2>
      <ul className="list-group city--list">
        {cities?.map((rec) => (
          <li key={rec.id} className="list-group-item">
            {rec.name}
          </li>
        ))}
      </ul>
    </>
  );
}
function App({ displayCount }) {
  const [resource, setResource] = useState();

  useEffect(() => {
    setResource(fetchCityListData(displayCount));
  }, [displayCount]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderComponent resource={resource} />
    </Suspense>
  );
}

export default App;
