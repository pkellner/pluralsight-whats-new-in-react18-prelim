import { cities } from "../data/cities";

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

const fetchCityInfo = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cities
          .filter((a) => a.id === cityId)
          .map(function ({ id, name, state }) {
            return {
              id,
              name,
              state,
            };
          })[0]
      );
    }, 1800);
  });
};

const fetchCityStats = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cities
          .filter((a) => a.id === cityId)
          .map(function ({growth, id, population}) {
            return {
              id,
              population,
              growth,
            };
          })[0]
      );
    }, 2300);
  });
};

const fetchCityLocation = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cities
          .filter((a) => a.id === cityId)
          .map(function (rec) {
            return {
              id: rec.id,
              latitude: rec.latitude,
              longitude: rec.longitude,
            };
          })[0]
      );
    }, 1300);
  });
};
