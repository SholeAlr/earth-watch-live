import { useQuery } from "@tanstack/react-query";
import { fetchDisasters } from "../../services/nasaApi";

export const useDisasters = () => {
  return useQuery({
    queryKey: ["disasters"],
    queryFn: fetchDisasters,
    refetchInterval: 1000 * 60 * 3,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 3,
    retry: 0,
  });
};
