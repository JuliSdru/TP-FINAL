import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/servicios/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  email;
  home: string;
  signed: boolean;
  nombre: string;
  foto: string;
  parametro: string;
  usuario = [];


  constructor(
    private regService: RegistroService,
    private router: Router,
  ) { }
  
  ngOnInit(): void {
    const email = this.regService.traerMail();
    this.regService.obtenerXTodos("usuarios/" + email + "/datos").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let userInfo = response.payload.doc.data(0);
        this.home = userInfo.tipo;
        // console.log(this.home);
        this.foto = userInfo.foto;
        this.nombre = userInfo.nombre;
        this.email = userInfo.email;
      })
    });




  }
/******RUTEOS******/
  sesiones()
  {
    this.router.navigateByUrl('/ver-sesiones');
  }
  registrarA()
  {
    this.router.navigateByUrl('/registrar-admin');
  }
  graficos()
  {
    this.router.navigateByUrl('/graficos');
  }
  sacarTurno()
  {
    this.router.navigateByUrl('/sacar-turno');
  }
  verTurnos()
  {
    this.router.navigateByUrl('/ver-turnos');
  }
  turnosPasados()
  {
    this.router.navigateByUrl('/turnos-pasados');
  }
  verTurnosE()
  {
    this.router.navigateByUrl('/ver-turnos-especialista');
  }
  sacarTurnosR()
  {
    this.router.navigateByUrl('/sacar-turno-recepcionista');
  }
  turnosVigenteR()
  {
    this.router.navigateByUrl('/ver-turnos-recepcionista');
  }
  verSalas()
  {
    this.router.navigateByUrl('/consultorios');
  }
}
