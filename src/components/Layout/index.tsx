import { type FC } from "react";
import type { LayoutProps } from "./types";
import { Header, Filters } from "./components";

export const Layout: FC<LayoutProps> = ({
  selectedFilter,
  setSelectedFilter,
  children,
}) => {
  return (
    <div className='layout'>
      <Header />
      <Filters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {children}
    </div>
  );
};
