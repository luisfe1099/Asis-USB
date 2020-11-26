import { TagI } from './tag-i';

export interface NewI {
    title: string;
    summary: string;
    content: string;
    image: string;
    tags: Array<TagI>;
    imgSize?: number;
    contentSize?: number;
}
