import "./App.css";
import { Suspense } from "react";
import CityList from "./ui/CityList";
import { CityListStoreProvider } from "./contexts/CityListStoreContext";

function App() {
  return (
    <CityListStoreProvider displayCount={7}>
      <Suspense fallback={<div>Loading...</div>}>
        <CityList />
      </Suspense>
    </CityListStoreProvider>
  );
}

export default App;
