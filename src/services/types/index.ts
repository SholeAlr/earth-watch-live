export interface IEonetEvent {
  id: string;
  title: string;
  categories: {
    id: string;
    title: string;
  }[];
  geometry: {
    magnitudeValue?: number;
    magnitudeUnit?: string;
    date: string;
    type: string;
    coordinates: [number, number];
  }[];
}
