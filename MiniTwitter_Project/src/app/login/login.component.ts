import { Component, OnInit } from '@angular/core';
import { loginDto } from '../dto/login.dto';
import { AutentService } from '../service/autent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: loginDto;

  // Inyección de dependencias
  constructor(private authService: AutentService, public router: Router) { 
    this.usuario = new loginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login(this.usuario).subscribe(respuesta => {
      this.authService.setToken(respuesta.token)
      this.router.navigateByUrl('/');
    });
  }

}
