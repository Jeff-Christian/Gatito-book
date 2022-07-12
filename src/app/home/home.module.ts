import { MensagemModule } from './../mensagem/mensagem.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
