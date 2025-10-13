import { Injectable } from '@angular/core';
import { Pessoa } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:3000/pessoas'
 


  constructor(private httpClient:   HttpClient) { }

  listar() : Observable <Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(this.API)
  }
 
}