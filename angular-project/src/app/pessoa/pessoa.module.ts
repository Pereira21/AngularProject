import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CadPessoaComponent } from "./cadastro/cad-pessoa.component";
import { EditPessoaComponent } from "./edicao/edit-pessoa/edit-pessoa.component";
import { PessoaCardDetalheComponent } from "./listagem/components/pessoa-card-detalhe.component";
import { PessoaComponent } from "./listagem/pessoas.component";
import { PessoaAppComponent } from "./pessoa.app.component";
import { PessoaRoutingModule } from "./pessoa.routing";
import { PessoaService } from "./services/pessoa-service.component";

@NgModule({
    declarations: [
        PessoaAppComponent,
        CadPessoaComponent,
        EditPessoaComponent,
        PessoaComponent,
        PessoaCardDetalheComponent
    ],
    imports: [
        CommonModule,
        PessoaRoutingModule,
        ReactiveFormsModule
    ],
    providers:[
        PessoaService
    ],
    exports:[

    ]
})

export class PessoaModule{

}