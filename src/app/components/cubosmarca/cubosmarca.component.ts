import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/cubo';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css'],
})
export class CubosmarcaComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;
  public logueado !: Boolean;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {}

  comprobarLogin(): void{
    if (environment.token == "") {
      this.logueado = false;
    }else{
      this.logueado =  true;
    }
  }

  comprarCubo(idCubo: number): void{
    this._serviceCubos.comprarCubo(idCubo).subscribe((response) => {
      this._router.navigate(['/compras']);
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.marca = parametros['marca'];
      this._serviceCubos.getCubosMarca(this.marca).subscribe((response) => {
        this.cubos = response;
        this.comprobarLogin();
      });
    });
  }
}
