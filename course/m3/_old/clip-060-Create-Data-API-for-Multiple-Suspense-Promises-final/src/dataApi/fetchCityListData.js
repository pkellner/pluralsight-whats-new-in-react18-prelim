import { topCities } from "../data/cities";

export function fetchCityListData(displayCount = 5) {
  const citiesPromise = fetchCities(displayCount);
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
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const fetchCities = (displayCount = 5) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(topCities(displayCount));
    }, 2000);
  });
};
