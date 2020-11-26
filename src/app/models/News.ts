import { Tags } from "./Tags";

export interface News {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  tags: Array<Tags>;
  imgSize: number;
  contentSize: number;
}
