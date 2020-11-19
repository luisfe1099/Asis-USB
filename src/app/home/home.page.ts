import { Component, OnInit } from "@angular/core";

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
          summary: "Preview content",
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

  constructor() {}

  ngOnInit() {}
}
