import {
  fetchCityInfo,
  fetchCityStats,
  fetchCityLocation,
} from "../data/cities";

export function fetchCityDetailData(cityId) {
  let cityInfoPromise = fetchCityInfo(cityId);
  let cityStatsPromise = fetchCityStats(cityId);
  let cityLocationPromise = fetchCityLocation(cityId);
  return {
    cityInfo: wrapPromise(cityInfoPromise),
    cityStats: wrapPromise(cityStatsPromise),
    cityLocation: wrapPromise(cityLocationPromise),
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
