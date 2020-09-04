import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  personas: {}  = {};

  constructor(private personasService: PersonaService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.personasService.obtener()
    .subscribe(data =>{
     
      console.log(data);
      this.personas = data;
  });
}

  // tslint:disable-next-line: typedef


}
