import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  URL_Tarefa = 'http://localhost:8080';
  constructor(private clienteHttp: HttpClient) { }

  inserir(id: string, newTarefa: Tarefa): Observable<Tarefa> {
    return this.clienteHttp.post<Tarefa>(
      this.URL_Tarefa + '/projetos/' + id + '/tarefas', newTarefa);
  }

  listar(): Observable<Tarefa[]> {
    return this.clienteHttp.get<Tarefa[]>(this.URL_Tarefa);
  }

  deletar(idTarefa: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Tarefa}/tarefas/${idTarefa}`);
  }

  pesquisarPorId(id: string): Observable<Tarefa> {
    return this.clienteHttp.get<Tarefa>(`${this.URL_Tarefa}/tarefas/${id}`);
  }

  atualizar(task: Tarefa): Observable<Tarefa> {
    return this.clienteHttp
      .put<Tarefa>(`${this.URL_Tarefa}/tarefas/${task.id}`, task);
  }
}
