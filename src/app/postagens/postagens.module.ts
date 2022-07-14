import { CardModule } from './../componentes/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagensRoutingModule } from './postagens-routing.module';
import { GridComponent } from './grid/grid.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';


@NgModule({
  declarations: [
    GridComponent,
    PublicacaoComponent,
    GridPhotosComponent
  ],
  imports: [
    CommonModule,
    PostagensRoutingModule,
    CardModule,
  ]
})
export class PostagensModule { }
