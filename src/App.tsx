import { useState } from "react";
import "./App.css";
import { Map, Layout } from "./components";
import { DISASTER_TYPES, type DisasterType } from "./types";

function App() {
  const [selectedFilter, setSelectedFilter] = useState<DisasterType[]>([
    ...DISASTER_TYPES,
  ]);

  const onToggleFilter = (type: DisasterType) => {
    setSelectedFilter((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  return (
    <Layout selectedFilter={selectedFilter} onToggleFilter={onToggleFilter}>
      <Map selectedFilter={selectedFilter} />
    </Layout>
  );
}

export default App;
