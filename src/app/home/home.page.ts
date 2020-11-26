import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "../models/Category";
import { NewsService } from "../services/news.service";
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

  categories: Array<Category> = [];

  constructor(public router: Router, private newsService: NewsService) {}

  ngOnInit() {
    this.getAllNews();
  }

  verDetalleNoticia(noticia) {
    let dataObj = noticia;
    let dataString = JSON.stringify(dataObj);
    this.router.navigate(["new-detail", dataString]);
  }

  getAllNews() {
    this.newsService.getAllNews().subscribe(data=>{
      this.categories = data;
    })
  }
}
