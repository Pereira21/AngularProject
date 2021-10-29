import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadPessoaComponent } from "./cadastro/cad-pessoa.component";
import { EditPessoaComponent } from "./edicao/edit-pessoa/edit-pessoa.component";
import { PessoaComponent } from "./listagem/pessoas.component";
import { PessoaAppComponent } from "./pessoa.app.component";
// import { PessoaResolve } from "./services/pessoa-resolve.component";

const pessoaRoutes: Routes = [
  { path: '', component: PessoaAppComponent, 
    children: [
      // { path: '', component: PessoaComponent },
      // { path: ':estado', component: PessoaComponent, resolve: { pessoas: PessoaResolve }},
      { path: '', component: PessoaComponent },
      { path: 'cadastrar', component: CadPessoaComponent },
      { path: 'editar/:id', component: EditPessoaComponent }
    ]},
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