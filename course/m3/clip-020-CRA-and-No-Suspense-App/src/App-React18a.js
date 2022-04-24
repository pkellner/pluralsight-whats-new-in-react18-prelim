import "./App.css";
import { Suspense } from "react";
import {topCities} from "./data/cities";

function RenderComponent({ resource }) {
  const cities = resource?.cities.read();
  return (
    <ul>
      {cities?.map((rec) => (
        <li key={rec.id}>{rec.name}</li>
      ))}
    </ul>
  );
}
export default function App({ displayCount }) {
  const specialPromiseResource = createSpecialPromise(displayCount);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderComponent resource={specialPromiseResource} />
    </Suspense>
  );
}

const fetchCities = (displayCount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(topCities(displayCount));
    }, 2000);
  });
};

////////////////////////////////////

function createSpecialPromise(displayCount) {
  let citiesPromise = fetchCities(displayCount);
  return {
    cities: wrapPromise(citiesPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "success":
          return result;
      }
    },
  };
}
