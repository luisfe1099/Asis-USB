import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/Category';

@Pipe({
  name: 'searchCategories'
})
export class SearchCategoriesPipe implements PipeTransform {

  transform(result: Array<Category>, term: any): any {
    //console.log(term);

    if (term && term.length !== 0) {
      term = term.toLowerCase();
      result = result.filter(
        c => c.news.some(
          n => n.tags.some(
            t => t.name.toLowerCase().includes(term)
          ) || n.title.toLowerCase().includes(term) ||
            n.summary.toLowerCase().includes(term) ||
            n.content.toLowerCase().includes(term)
        )
      );
    }

    //console.log(result);
    return result;
  }

}
