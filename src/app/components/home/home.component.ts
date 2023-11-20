import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { environment } from 'src/environments/environment';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public logueado!: Boolean;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _router: Router
  ) {}
  comprobarLogin(): void {
    if (environment.token == '') {
      this.logueado = false;
    } else {
      this.logueado = true;
    }
  }
  comprarCubo(idCubo: number): void {
    this._serviceCubos.comprarCubo(idCubo).subscribe((response) => {
      this._router.navigate(['/compras']);
    });
  }

  ngOnInit(): void {
    this._serviceCubos.getAllCubos().subscribe((response) => {
      this.cubos = response;
    });
  }
  ngDoCheck(): void {
    this.comprobarLogin();
  }
}
