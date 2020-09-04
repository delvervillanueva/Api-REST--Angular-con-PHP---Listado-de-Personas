import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

baseUrl = environment.baseUrl ;


obtener(){

  return this.http.get(`${this.baseUrl}/obtener_personas.php`);
}

}