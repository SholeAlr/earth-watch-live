import type { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { IconMarker } from "./IconMarker";
import { useDisasters } from "../../hooks";
import { Loading } from "./Loading";
import { ErrorScreen } from "./ErrorScreen";
import type { MapProps } from "./types";
import type { DisasterType } from "../../types";

const MapView: FC<MapProps> = ({ selectedFilter }) => {
  const { data: events, isLoading, isError, refetch, error } = useDisasters();

  const CATEGORY_MAP: Record<string, DisasterType | undefined> = {
    wildfires: "wildfires",
    volcanoes: "volcanoes",
    floods: "floods",
    severestorms: "severestorms",
    sealakeice: "sealakeice",
  };

  return (
    <MapContainer
      center={[39.0, 35.0]}
      zoom={6}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {!isError &&
        !isLoading &&
        events
          ?.filter((event) =>
            event.categories.some((cat) => {
              const mapped = CATEGORY_MAP[cat.id];
              return mapped && selectedFilter.includes(mapped);
            }),
          )
          .map((event) =>
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

      {isLoading && <Loading />}
      {isError && !isLoading && (
        <ErrorScreen message={error?.message} onRetry={refetch} />
      )}
    </MapContainer>
  );
};

export default MapView;
