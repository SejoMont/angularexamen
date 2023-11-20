import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

import { ServiceCubos } from './services/service.cubos';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { ComentarioscuboComponent } from './components/comentarioscubo/comentarioscubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CubosmarcaComponent,
    ComentarioscuboComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ComprasusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProvider, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }