import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { CarruselComponent } from './compartida/carrusel/carrusel.component';
import { ProductosComponent } from './compartida/productos/productos.component';
import { LoginComponent } from './compartida/login/login.component';
import { RegisterComponent } from './compartida/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CarruselComponent,
    ProductosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
