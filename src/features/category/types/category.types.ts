import { MaterialIconName } from "@/shared/types";

export interface Category {
  id: string;
  name: string;
  icon: MaterialIconName;
  createdAt: string;
  updatedAt: string;
}
