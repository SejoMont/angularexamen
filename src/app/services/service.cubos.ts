import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { Login } from '../models/login';
import { Register } from '../models/register';

//IMPORTANTE: IMPORTAR EL SERVICIO EN EL MODULE EN PROVIDERS

@Injectable()
export class ServiceCubos {
  constructor(private _http: HttpClient) {}
  getMarcas(): Observable<any> {
    var request = 'api/Cubos/Marcas';
    var url = environment.apiCubos + request;
    return this._http.get(url);
  }

  getCubosMarca(marca: string): Observable<any> {
    var request = '/api/Cubos/CubosMarca/' + marca;
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }

  getComentariosCubo(idCubo: number): Observable<any> {
    var request = '/api/ComentariosCubo/GetComentariosCubo/' + idCubo;
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }

  login(login: Login): Observable<any> {
    var json = JSON.stringify(login);
    var header = new HttpHeaders();
    header = header.set('content-type', 'application/json');
    var request = '/api/Manage/Login';
    var url = environment.apiCubos + request;

    return this._http.post(url, json, { headers: header });
  }

  register(register: Register): Observable<any> {
    var json = JSON.stringify(register);
    var header = new HttpHeaders();
    header = header.set('content-type', 'application/json');
    var request = '/api/Manage/RegistroUsuario';
    var url = environment.apiCubos + request;

    return this._http.post(url, json, { headers: header });
  }

  getPerfil(): Observable<any> {
    var header = new HttpHeaders();
    header = header.set('Authorization', 'bearer ' + environment.token);
    var request = '/api/Manage/PerfilUsuario';
    var url = environment.apiCubos + request;

    return this._http.get(url, { headers: header });
  }

  getCompras(): Observable<any> {
    var header = new HttpHeaders();
    header = header.set('Authorization', 'bearer ' + environment.token);
    var request = '/api/Compra/ComprasUsuario';
    var url = environment.apiCubos + request;

    return this._http.get(url, { headers: header });
  }

  comprarCubo(idCubo: number): Observable<any> {
    
    var header = new HttpHeaders();
    header = header.set('content-type', 'application/json').set('Authorization', 'bearer ' + environment.token);
    var request = '/api/Compra/InsertarPedido/'+idCubo;
    var url = environment.apiCubos + request;

    return this._http.post(url, {}, { headers: header });
  }
}
