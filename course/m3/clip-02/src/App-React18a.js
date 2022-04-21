import "./App.css";
import { Suspense } from "react";

function RenderComponent({ specialPromiseResource }) {
  const cities = specialPromiseResource.getCities();
  return (
    <ul>
      {cities.map(rec =>
        <li key={rec.id}>{rec.name}</li>)}
    </ul>
  );
}
function App({ displayCount }) {
  const specialPromiseResource = createSpecialPromise(
    `/api/cities?count=${displayCount}`
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderComponent resource={specialPromiseResource} />
    </Suspense>
  );
}
function createSpecialPromise(url) {
  // start url fetch and return
  return {
    ready() {
      // if fetch ready, return result
      // if fetch not ready, throw special suspender
    }
  }
}
