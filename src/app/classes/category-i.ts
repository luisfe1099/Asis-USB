import { NewI } from './new-i';

export interface CategoryI {
    id: number;
    name: string;
    icon: string;
    news: Array<NewI>;
}
