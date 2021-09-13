import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PessoaComponent } from "./pessoa.component";
import { PessoaRoutingModule } from "./pessoa.routing";

@NgModule({
    declarations: [
        PessoaComponent
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