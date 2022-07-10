import { Routes ,RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule)},
  {path: 'postagens',loadChildren: () => import ('./postagens/postagens.module').then((m)=> m.PostagensModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
