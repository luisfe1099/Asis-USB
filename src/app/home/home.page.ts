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
          summary: "Lorem ipsum dolor sit amet",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium vestibulum dictum. Suspendisse potenti. Proin pulvinar vitae massa nec molestie. Mauris aliquet urna sit amet nibh pharetra eleifend. Duis et mi et tortor vestibulum pharetra.",
          image: "https://i.picsum.photos/id/652/200/300.jpg?hmac=yJT5T1Ugojp0HlslsxDN_nNnIIk4lsFXcV_5rq9FCTw",
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
          summary: "Morbi ultrices tortor diam",
          content: "Morbi ultrices tortor diam, ac gravida purus finibus id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ultrices varius enim, imperdiet feugiat nulla dignissim vulputate. Maecenas nisl est, egestas volutpat lob.",
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
          summary: "Vestibulum tempus commodo quam",
          content: "Vestibulum tempus commodo quam, non laoreet enim rutrum quis. Integer accumsan mauris quis mollis sollicitudin. Suspendisse nisi est, gravida in fermentum ut, molestie sit amet lorem. Fusce eget bibendum magna. Aliquam sit amet vestibulum mi, vel tincidu.",
          image: "https://i.picsum.photos/id/437/200/300.jpg?hmac=qjAKcFjQXvVBX_di7_9jMlPlgfQZUK2AV1IQ6W1eIIw",
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
