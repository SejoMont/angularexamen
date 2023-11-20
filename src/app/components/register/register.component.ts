import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Register } from 'src/app/models/register';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild('cajaname') cajaNameRef!: ElementRef;
  @ViewChild('cajaemail') cajaEmailRef!: ElementRef;
  @ViewChild('cajapassword') cajaPassowrdRef!: ElementRef;

  public registerData!: Register;

  constructor(private _serviceCubos: ServiceCubos, private _router: Router) {}

  register() {
    var id = 0;
    var nombre = this.cajaNameRef.nativeElement.value;
    var email = this.cajaEmailRef.nativeElement.value;
    var pass = this.cajaPassowrdRef.nativeElement.value;

    this.registerData = new Register(id, nombre, email, pass);
    this._serviceCubos.register(this.registerData).subscribe((response) => {
      this._router.navigate(['/login']);
    });
  }
}
