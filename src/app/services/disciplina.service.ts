import { Disciplina } from './../models/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  Url: string = 'http://localhost:8080/disciplinas'

  constructor(private HttpClient: HttpClient ){
  }
  
  BuscarDisciplinas(): Observable<Disciplina[]>{
    return this.HttpClient.get<Disciplina[]>(this.Url)
  }

}
