import { type FC } from "react";
import type { LayoutProps } from "./types";
import { Header, Filters } from "./components";

export const Layout: FC<LayoutProps> = ({
  selectedFilter,
  onToggleFilter,
  children,
}) => {
  return (
    <div className='layout'>
      <Header />
      <Filters
        selectedFilter={selectedFilter}
        onToggleFilter={onToggleFilter}
      />
      {children}
    </div>
  );
};
