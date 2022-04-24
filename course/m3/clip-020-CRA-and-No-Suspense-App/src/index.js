import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
//import App from "./App-React18a";
//import App from "./App-React17";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App displayCount={10} />
  </React.StrictMode>
);

reportWebVitals();
