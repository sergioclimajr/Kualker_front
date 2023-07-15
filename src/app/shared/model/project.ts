import { Tarefa } from "./task";

export class Projeto {
    id?: string;
    descricao?: string;
    nome?: string;
    tarefas?: Array<Tarefa>;
  
    constructor(id?: string, projeto: Projeto = {}) {
      this.id = id;
      this.descricao = projeto.descricao;
      this.nome = projeto.nome;
      this.tarefas = projeto.tarefas;
  
    }
  }