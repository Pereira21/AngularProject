import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PessoaComponent } from "./listagem/pessoas.component";

const pessoaRoutes: Routes = [
  { path: '', component: PessoaComponent }
    // { path: '', component: CadPessoaComponent }
  ];

@NgModule({
  imports:[
    RouterModule.forChild(pessoaRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PessoaRoutingModule { }