import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConexaoService {
  Url: string = 'http://localhost:8080/conexoes'
  constructor(private HttpClient: HttpClient ){
  }

  ContarConexoes(): Observable<number>{
    return this.HttpClient.get<number>(this.Url)
  }
}
