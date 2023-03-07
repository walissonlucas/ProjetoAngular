import { ExcluirPensamentoComponent } from './Components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './Components/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentosComponent } from './Components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPensamentoComponent } from './Components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
