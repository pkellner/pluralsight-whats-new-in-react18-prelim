import "./App.css";
import { Suspense } from "react";
import CityList from "./ui/CityList";
import { CityListStoreProvider } from "./contexts/CityListStoreContext";
import { DisplayCountProvider } from "./contexts/DisplayCountContext";
import CityDisplayCount from "./ui/CityDisplayCount";
import CityDetail from "./ui/CityDetail";

function App() {
  return (
    <DisplayCountProvider initialDisplayCount={5}>
      <CityListStoreProvider>
        <CityDisplayCount />
        <Suspense fallback={<div>Loading...</div>}>
          <CityList>
            <Suspense fallback={<div>Loading...</div>}>
              <CityDetail />
            </Suspense>
          </CityList>
        </Suspense>
      </CityListStoreProvider>
    </DisplayCountProvider>
  );
}

export default App;
