import { Publicacao, Postagens } from './../postagens';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-photos',
  templateUrl: './grid-photos.component.html',
  styleUrls: ['./grid-photos.component.css']
})
export class GridPhotosComponent implements OnInit {

  @Input() postagens!: Postagens;

  constructor() { }

  ngOnInit(): void {
  }

}
