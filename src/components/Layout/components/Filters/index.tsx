import type { FC } from "react";
import {
  DISASTER_TYPES,
  type DisasterType,
  type SidebarProps,
} from "../../../../types";
import "./styles/Filters.scss";
import { DISASTER_LABELS } from "./constants";

export const Filters: FC<SidebarProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const toggle = (type: DisasterType) => {
    setSelectedFilter((prev: any) =>
      prev.includes(type)
        ? prev.filter((t: any) => t !== type)
        : [...prev, type],
    );
  };

  return (
    <div className='filters-container'>
      <h3>Filters</h3>

      <span className='filter-wrapper'>
        {DISASTER_TYPES.map((type) => (
          <div className='filter-item' key={type}>
            <input
              type='checkbox'
              checked={selectedFilter.includes(type)}
              onChange={() => toggle(type)}
            />
            <p>{DISASTER_LABELS[type]}</p>
          </div>
        ))}
      </span>
    </div>
  );
};
