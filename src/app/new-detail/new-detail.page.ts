import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {

  public noticia:any = {};
  tituloSeccion: string;

  constructor(
    public activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    let dataEnviada = this.activatedRoute.snapshot.paramMap.get('dataObj');
    dataEnviada = JSON.parse(dataEnviada);
    this.noticia = dataEnviada;
    this.tituloSeccion = this.noticia.title;
    console.log(this.noticia);
    
  }

}
