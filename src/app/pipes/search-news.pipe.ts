import { Pipe, PipeTransform } from '@angular/core';
import { CategoryI } from '../classes/category-i';

@Pipe({
  name: 'searchNews'
})
export class SearchNewsPipe implements PipeTransform {

  transform(result: Array<CategoryI>, term: any): any {
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

    console.log(result);
    return result;
  }

}
