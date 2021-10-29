import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FileSizePipe } from "../pipes/filesize.pipe";
import { CadPessoaComponent } from "./cadastro/cad-pessoa.component";
import { EditPessoaComponent } from "./edicao/edit-pessoa/edit-pessoa.component";
import { PessoaCardDetalheComponent } from "./listagem/components/pessoa-card-detalhe.component";
import { PessoaComponent } from "./listagem/pessoas.component";
import { PessoaAppComponent } from "./pessoa.app.component";
import { PessoaRoutingModule } from "./pessoa.routing";
// import { PessoaResolve } from "./services/pessoa-resolve.component";obterPeloId
import { PessoaService } from "./services/pessoa-service.component";

@NgModule({
    declarations: [
        PessoaAppComponent,
        CadPessoaComponent,
        EditPessoaComponent,
        PessoaComponent,
        PessoaCardDetalheComponent,
        FileSizePipe
    ],
    imports: [
        CommonModule,
        PessoaRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers:[
        PessoaService,
        // PessoaResolve
    ],
    exports:[

    ]
})

export class PessoaModule{

}