import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;
  public logueado!: Boolean;

  constructor(private _serviceCubos: ServiceCubos) {}

  comprobarLogin(): void {
    if (environment.token == '') {
      this.logueado = false;
    } else {
      this.logueado = true;
    }
  }

  ngOnInit(): void {
    this._serviceCubos.getMarcas().subscribe((response) => {
      this.marcas = response;
    });
  }
  ngDoCheck(): void {
    this.comprobarLogin();
  }
}
