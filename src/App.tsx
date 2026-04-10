import { useState } from "react";
import "./App.css";
import { Map, Layout } from "./components";
import { DISASTER_TYPES, type DisasterType } from "./types";

function App() {
  const [selectedTypes, setSelectedTypes] = useState<DisasterType[]>([
    ...DISASTER_TYPES,
  ]);

  return (
    <Layout selectedFilter={selectedTypes} setSelectedFilter={setSelectedTypes}>
      <Map selectedFilter={selectedTypes} />
    </Layout>
  );
}

export default App;
