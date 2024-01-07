import { Timestamp, timestamp } from "rxjs";

export interface HousingLocation {
  id: number;
  created_at: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
