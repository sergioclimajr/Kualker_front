import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL_Projeto = 'http://localhost:8080/projetos';
  constructor(private clienteHttp: HttpClient) { }

  inserir(newProjeto: Projeto): Observable<Projeto> {
    return this.clienteHttp.post<Projeto>(
      this.URL_Projeto, newProjeto);
  }

  listar(): Observable<Projeto[]> {
    return this.clienteHttp.get<Projeto[]>(this.URL_Projeto);
  }

  deletar(idProjeto: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Projeto}/${idProjeto}`);
  }

  pesquisarPorId(id: string): Observable<Projeto> {
    return this.clienteHttp.get<Projeto>(`${this.URL_Projeto}/${id}`);
  }

  atualizar(projeto: Projeto): Observable<Projeto> {
    return this.clienteHttp
      .put<Projeto>(`${this.URL_Projeto}/${projeto.id}`, projeto);
  }
}
