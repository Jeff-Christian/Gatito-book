import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagensRoutingModule } from './postagens-routing.module';
import { GridComponent } from './grid/grid.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';


@NgModule({
  declarations: [
    GridComponent,
    PublicacaoComponent
  ],
  imports: [
    CommonModule,
    PostagensRoutingModule
  ]
})
export class PostagensModule { }
