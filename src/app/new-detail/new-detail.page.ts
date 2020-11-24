import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let dataEnviada = this.activatedRoute.snapshot.paramMap.get('dataObj');
    dataEnviada = JSON.parse(dataEnviada);
    console.log(dataEnviada);
  }

}
