import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Compra } from 'src/app/models/compra';


@Component({
  selector: 'app-comprasusuario',
  templateUrl: './comprasusuario.component.html',
  styleUrls: ['./comprasusuario.component.css']
})
export class ComprasusuarioComponent implements OnInit {
  public compras!: Array<Compra>;

  constructor(public _serviceCubos: ServiceCubos) {}

  loadCompras(): void {
    this._serviceCubos.getCompras().subscribe((response) => {
      this.compras = response;
    });
  }
  ngOnInit(): void {
    this.loadCompras();
  }
}