import axios from "axios";
import type { IEonetEvent } from "./types";

const BASE_URL = "https://eonet.gsfc.nasa.gov/api/v3/events";

export const fetchDisasters = async (): Promise<IEonetEvent[]> => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.events;
  } catch (error) {
    console.error("Error fetching natural events:", error);
    throw new Error("Failed to fetch national events data");
  }
};
