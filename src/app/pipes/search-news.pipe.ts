import { Pipe, PipeTransform } from '@angular/core';
import { NewI } from '../classes/new-i';

@Pipe({
  name: 'searchNews'
})
export class SearchNewsPipe implements PipeTransform {

  transform(result: Array<NewI>, term: any): any {
    //console.log(term);

    if (term && term.length !== 0) {
      term = term.toLowerCase();
      result = result.filter(
        n => n.tags.some(
          t => t.name.toLowerCase().includes(term)
        ) || n.title.toLowerCase().includes(term) ||
          n.summary.toLowerCase().includes(term) ||
          n.content.toLowerCase().includes(term)
      );
    }

    //console.log(result);
    return result;
  }

}
