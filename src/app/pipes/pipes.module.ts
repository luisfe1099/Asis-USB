import { NgModule } from '@angular/core';
import { SearchCategoriesPipe } from './search-categories.pipe';
import { SearchNewsPipe } from './search-news.pipe';

@NgModule({
  declarations: [SearchCategoriesPipe, SearchNewsPipe],
  exports: [SearchCategoriesPipe, SearchNewsPipe],
})
export class PipesModule { }
