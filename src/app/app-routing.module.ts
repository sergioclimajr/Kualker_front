import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }, 

  {
    path:'projeto/:id/novaTarefa',
    component:CreateTaskComponent
  },
  
  {
    path:'novoProjeto',
    component:CreateProjectComponent
  },
  
  {
    path:'editarTarefa/:id',
    component:CreateTaskComponent
  },
  
  {
    path:'editarProjeto/:id',
    component:CreateProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
