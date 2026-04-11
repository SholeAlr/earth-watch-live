import type { ReactNode } from "react";
import type { DisasterType } from "../../../types";

export interface LayoutProps {
  children: ReactNode;
  selectedFilter: DisasterType[];
  onToggleFilter: (type: DisasterType) => void;
}
