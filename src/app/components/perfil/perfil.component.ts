import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public usuario!: Register;

  constructor(public _serviceCubos: ServiceCubos) {}
  loadPerfil(): void {
    this._serviceCubos.getPerfil().subscribe((response) => {
      this.usuario = response;
    });
  }
  ngOnInit(): void {
    this.loadPerfil();
  }
}
