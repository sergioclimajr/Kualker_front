import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from 'src/app/shared/model/project';
import { ProjectService } from 'src/app/shared/service/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {

    editar;
    inserindo = true;
    nomeBotao = 'Inserir';
    router: Router;
    projeto : Projeto;
  
    constructor(router: Router, private projetoService : ProjectService,  private route: ActivatedRoute) {
      this.router = router;
      this.projeto = new Projeto('', {})
      this.editar = false
    }

  ngOnInit(): void {
    if (this.route.snapshot.params["id"]){
      this.editar = true
      this.projetoService.pesquisarPorId(this.route.snapshot.params["id"]).subscribe(
        projeto => {
          this.projeto = projeto
        }
      )
    }
  }

  inserirProjeto(){
    this.projetoService.inserir(this.projeto).subscribe(
      projetos => {
        Swal.fire({
        icon: 'success',
        title: 'Projeto cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
      this.projeto = new Projeto('', {});
    })
  }

  editarProjeto(){
    this.projetoService.atualizar(this.projeto).subscribe(
      projetos => {
        Swal.fire({
        icon: 'success',
        title: 'Projeto editado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    
  })
  }
}