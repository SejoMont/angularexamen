import { HomeComponent } from './components/home/home.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { ComentarioscuboComponent } from './components/comentarioscubo/comentarioscubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'marca/:marca', component: CubosmarcaComponent },
    { path: 'comentarios/:idcubo', component: ComentarioscuboComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'compras', component: ComprasusuarioComponent },
  ];
  
  export const appRoutingProvider: any[] = [];
  export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);