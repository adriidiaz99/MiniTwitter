import { Component, OnInit } from '@angular/core';
import { loginDto } from '../dto/login.dto';
import { AutentService } from '../service/autent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: loginDto;

  // Inyección de dependencias
  constructor(private authService: AutentService) { 
    this.usuario = new loginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(respuesta => {
      console.log(respuesta.token);
      
      alert('API TOKEN ' + respuesta.token);
    });
  }

}
