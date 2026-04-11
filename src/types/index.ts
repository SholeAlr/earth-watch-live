export const DISASTER_TYPES = [
  "wildfires",
  "sealakeice",
  "volcanoes",
  "floods",
  "severestorms",
] as const;

export type DisasterType = (typeof DISASTER_TYPES)[number];

export interface SidebarProps {
  selectedFilter: DisasterType[];
  onToggleFilter: (type: DisasterType) => void;
}
