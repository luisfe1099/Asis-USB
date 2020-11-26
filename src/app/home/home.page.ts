import { Component, OnInit } from "@angular/core";
import { Category } from "../models/Category";
import { NewsService } from "../services/news.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  categoriesConfig = {
    imgSize: 3,
    contentSize: 9,
  };
  term: string;

  categories: Array<Category> = [];

  constructor(public router: Router, private newsService: NewsService) {}

  ngOnInit() {
    this.getAllNews();
    this.search();
  }

  verDetalleNoticia(noticia) {
    let dataObj = noticia;
    let dataString = JSON.stringify(dataObj);
    this.router.navigate(["new-detail", dataString]);
  }

  getAllNews() {
    this.newsService.getAllNews().subscribe((data) => {
      this.categories = data;
    });
  }

  search(event?: any) {
    this.term = !event ? "" : event.detail.value;
  }
}
