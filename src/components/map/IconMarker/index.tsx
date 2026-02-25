import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { categoryIconMap } from "./utils";
import type { IconMarkerProps } from "./types";

const createEmojiIcon = (emoji: string) => {
  return L.divIcon({
    html: `<div style="font-size: 24px; text-align: center;">${emoji}</div>`,
    className: "",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
};

export const IconMarker = ({
  position,
  category,
  title,
  date,
}: IconMarkerProps) => {
  const lowerCategory = category.toLowerCase();
  const emoji = categoryIconMap[lowerCategory] || "❓";

  return (
    <Marker position={position} icon={createEmojiIcon(emoji)}>
      <Popup>
        <strong>{title}</strong>
        <br />
        Category: {category}
        <br />
        Date: {date}
      </Popup>
    </Marker>
  );
};
