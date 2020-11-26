import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNewsPipe } from './search-news.pipe';



@NgModule({
  declarations: [SearchNewsPipe],
  exports: [SearchNewsPipe],
})
export class PipesModule { }
