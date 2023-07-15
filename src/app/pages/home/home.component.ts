import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/shared/model/project';
import { Tarefa } from 'src/app/shared/model/task';
import { ProjectService } from 'src/app/shared/service/project.service';
import { TarefaService } from 'src/app/shared/service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  router: Router;
  projetos: Projeto[];
  tarefas: Tarefa[];

  constructor(private projetoService: ProjectService, router: Router, private tarefaService: TarefaService) {
    this.router = router;
    this.projetos = new Array<Projeto>();
    this.tarefas = new Array<Tarefa>();
  }
  ngOnInit(): void {
    this.projetoService.listar().subscribe(
      projetos => this.projetos = projetos
    );
  }

  cadastrar(): void {
    this.router.navigate(['/cadastro']);
  }

  editarProjeto(projeto: Projeto): void{
    this.router.navigate(['editarProjeto/' + projeto.id])
  }

  editarTarefa(tarefa: Tarefa): void{
    this.router.navigate(['editarTarefa/' + tarefa.id])
  }

  deletarProjeto(projeto: Projeto): void {
    this.projetoService.deletar(projeto.id || '').subscribe(
      () => {
        this.projetos = this.projetos.filter(p => p.id !== projeto.id)
      }
    );
  }

  deletarTarefa(tarefa: Tarefa): void {
    this.tarefaService.deletar(tarefa.id || '').subscribe(
      () => {
        this.projetos.forEach(projeto => {
          projeto.tarefas = projeto.tarefas?.filter(item => item.id !== tarefa.id);
        });
      }
    );
  }

  adicionarTarefa(projeto: Projeto): void {
    this.router.navigate(['projeto/' + projeto.id + '/novaTarefa'])
  }

}


