import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Login } from 'src/app/models/login';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUserRef!: ElementRef;
  @ViewChild('cajapassword') cajaPassowrdRef!: ElementRef;

  public loginData !: Login;

  constructor(private _serviceCubos: ServiceCubos, private _router: Router) {}

  login() {
    var usuario = this.cajaUserRef.nativeElement.value;
    var pass = this.cajaPassowrdRef.nativeElement.value;

    this.loginData = new Login(usuario, pass);
    this._serviceCubos.login(this.loginData).subscribe((response) => {
      var authToken = response.response;

      environment.token = authToken;
      this._router.navigate(['/']);

      console.log(response.response);
    });
  }
}
