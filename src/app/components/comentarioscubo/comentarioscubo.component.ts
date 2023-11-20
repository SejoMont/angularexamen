import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { ServiceCubos } from 'src/app/services/service.cubos';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-comentarioscubo',
  templateUrl: './comentarioscubo.component.html',
  styleUrls: ['./comentarioscubo.component.css'],
})
export class ComentarioscuboComponent implements OnInit {
  public comentarios!: Array<Comentario>;
  public idcubo!: number;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.idcubo = parseInt(parametros['idcubo']);
      this._serviceCubos
        .getComentariosCubo(this.idcubo)
        .subscribe((response) => {
          this.comentarios = response;
        });
    });
  }
}
