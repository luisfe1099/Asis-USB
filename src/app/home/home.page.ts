import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

interface CategoryI {
  id: number;
  name: string;
  icon: string;
  news: Array<News>;
}

interface News {
  title: string;
  summary: string;
  content: string;
  image: string;
  tags: Array<Tag>;
  imgSize?: number;
  contentSize?: number;
}

interface Tag {
  id: number;
  name: string;
}

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

  categories: Array<CategoryI> = [
    {
      id: 1,
      name: "Salud",
      icon: "appstore",
      news: [
        {
          title: "Noticia 1",
          summary: "Preview content noticia 1",
          content: "Lorem ipsum",
          image: "https://picsum.photos/200/300",
          tags: [
            {
              id: 1,
              name: "Fitness",
            },
            {
              id: 2,
              name: "Arroz con huevo",
            },
            {
              id: 3,
              name: "SmartFit",
            },
            {
              id: 4,
              name: "CS:GO",
            },
            {
              id: 5,
              name: "ABerica",
            },
          ],
          imgSize: 3,
          contentSize: 9,
        },
        {
          title: "Noticia 2",
          summary: "Preview content noticia 2",
          content: "Lorem ipsum",
          image: "https://picsum.photos/200/300",
          tags: [
            {
              id: 1,
              name: "Name 1",
            },
          ],
          imgSize: 3,
          contentSize: 9,
        },
      ],
    },
    {
      id: 2,
      name: "Tecnologia",
      icon: "appstore",
      news: [
        {
          title: "Noticia 3",
          summary: "Preview content noticia 3",
          content: "Lorem ipsum",
          image: "https://picsum.photos/200/300",
          tags: [
            {
              id: 1,
              name: "Name 1",
            },
          ],
          imgSize: 3,
          contentSize: 9,
        },
      ],
    },
  ];

  constructor(
    public router: Router
  ) {}

  ngOnInit() {}

  verDetalleNoticia(noticia){
    let dataObj = noticia;
    let dataString = JSON.stringify(dataObj);
    this.router.navigate(['new-detail', dataString])
  }
}
