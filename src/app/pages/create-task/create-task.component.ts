import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/shared/model/task';
import { ProjectService } from 'src/app/shared/service/project.service';
import { TarefaService } from 'src/app/shared/service/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

    editar;
    inserindo = true;
    nomeBotao = 'Inserir';
    router: Router;
    tarefa: Tarefa;


    constructor(router: Router, private tarefaService : TarefaService, private projetoService : ProjectService,  private route: ActivatedRoute) {
      this.router = router;
      this.tarefa = new Tarefa('', {})
      this.editar = false
    }


  ngOnInit(): void {
    if (this.route.snapshot.url[0].toString() == "editarTarefa"){
      this.editar = true
      this.tarefaService.pesquisarPorId(this.route.snapshot.params["id"]).subscribe(
        tarefa => {
          this.tarefa = tarefa
        }
      )
    }
  }

   inserirTarefa(){

    this.tarefaService.inserir(this.route.snapshot.params["id"], this.tarefa).subscribe(
      projetos => {
        Swal.fire({
        icon: 'success',
        title: 'Tarefa cadastrada com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
      this.tarefa = new Tarefa('', {});
    })
  }

  editarTarefa(){
    this.tarefaService.atualizar(this.tarefa).subscribe(
      projetos => {
        Swal.fire({
        icon: 'success',
        title: 'Tarefa editada com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    
  })
  }



}
