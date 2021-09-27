import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CadPessoaComponent } from "./cadastro/cad.pessoa.component";
import { PessoaCardDetalheComponent } from "./listagem/components/pessoa-card-detalhe.component";
import { PessoaComponent } from "./listagem/pessoas.component";
import { PessoaRoutingModule } from "./pessoa.routing";

@NgModule({
    declarations: [
        CadPessoaComponent,
        PessoaComponent,
        PessoaCardDetalheComponent
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