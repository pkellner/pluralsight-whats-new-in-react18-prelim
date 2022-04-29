import "./App.css";
import { Suspense } from "react";
import CityList from "./ui/CityList";
import { CityListStoreProvider } from "./contexts/CityListStoreContext";
import { DisplayCountProvider } from "./contexts/DisplayCountContext";
import CityDisplayCount from "./ui/CityDisplayCount";

function App() {
  return (
    <DisplayCountProvider initialDisplayCount={5}>
      <CityDisplayCount />
      <CityListStoreProvider>
        
        <Suspense fallback={<div>Loading...</div>}>
          <CityList />
        </Suspense>
      </CityListStoreProvider>
    </DisplayCountProvider>
  );
}

export default App;
