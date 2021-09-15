import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CadPessoaComponent } from "./cadastro/cad.pessoa.component";
import { ListPessoaComponent } from "./listagem/components/pessoa.component";
import { PessoaComponent } from "./listagem/pessoas.component";
import { PessoaRoutingModule } from "./pessoa.routing";

@NgModule({
    declarations: [
        CadPessoaComponent,
        PessoaComponent,
        ListPessoaComponent
    ],
    imports: [
        CommonModule,
        PessoaRoutingModule,
        ReactiveFormsModule
    ],
    exports:[

    ]
})

export class PessoaModule{

}