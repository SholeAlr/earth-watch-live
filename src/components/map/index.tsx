import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { IconMarker } from "./IconMarker";
import { useDisasters } from "../../hooks";

const MapView = () => {
  const { data: events, isLoading, isError } = useDisasters();

  if (isLoading) return <p>Loading disasters...</p>;
  if (isError) return <p>Error loading disasters!</p>;

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {events?.map((event) =>
        event.geometry.map((geo, index) => (
          <IconMarker
            key={`${event.id}-${index}`}
            position={[geo.coordinates[1], geo.coordinates[0]]}
            category={event.categories[0]?.id || ""}
            title={event.title}
            date={new Date(geo.date).toLocaleDateString()}
          />
        )),
      )}
    </MapContainer>
  );
};

export default MapView;
