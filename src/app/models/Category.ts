import { News } from "./News";

export interface Category {
  id: number;
  name: string;
  icon: string;
  news: Array<News>;
}
