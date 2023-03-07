import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './Components/cabecalho/cabecalho.component';
import { RodapeComponent } from './Components/rodape/rodape.component';
import { CriarPensamentosComponent } from './Components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './Components/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './Components/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './Components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './Components/pensamentos/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
