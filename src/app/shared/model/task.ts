import { Projeto } from "./project";

export class Tarefa {
  id?: string;
  titulo?: string;
  descricao?: string;
  projeto?: Projeto;

  constructor(id?: string, tarefa: Tarefa = {}) {
    this.id = id;
    this.titulo = tarefa.titulo;
    this.descricao = tarefa.descricao;
    this.projeto = tarefa.projeto;

  }
}