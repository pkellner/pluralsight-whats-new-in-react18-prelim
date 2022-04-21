import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { fetchCityListData } from "./dataApi/fetchCityListData";

function RenderComponent({ resource }) {
  const cities = resource?.cities.read();

  return (
    <>
      {" "}
      <h1>Cities by Population</h1>
      <ul>
        {cities?.map((rec) => (
          <li key={rec.id}>
            {rec.name} {parseInt(rec.population).toLocaleString("en-US")}
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
