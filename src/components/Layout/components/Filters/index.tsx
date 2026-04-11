import type { FC } from "react";
import { DISASTER_TYPES, type SidebarProps } from "../../../../types";
import "./styles/Filters.scss";
import { DISASTER_LABELS } from "./constants";

export const Filters: FC<SidebarProps> = ({
  selectedFilter,
  onToggleFilter,
}) => {
  return (
    <div className='filters-container'>
      <h3>Filters</h3>

      <span className='filter-wrapper'>
        {DISASTER_TYPES.map((type) => (
          <div className='filter-item' key={type}>
            <input
              type='checkbox'
              checked={selectedFilter.includes(type)}
              onChange={() => onToggleFilter(type)}
            />
            <p>{DISASTER_LABELS[type]}</p>
          </div>
        ))}
      </span>
    </div>
  );
};
