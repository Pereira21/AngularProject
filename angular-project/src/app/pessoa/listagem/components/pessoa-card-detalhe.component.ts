import { Component, Input } from "@angular/core";
import { Pessoa } from "../../model/pessoa";

@Component({
    selector: 'app-pessoa-card-detalhe',
    templateUrl: 'pessoa-card-detalhe.component.html'
})

export class PessoaCardDetalheComponent{
    @Input()
    pessoa: Pessoa = new Pessoa();

    constructor() { 
        console.log(this.pessoa);
        console.log("this.pessoa");
    }

    excluirPessoa(id: number){
        console.log(id);
    }
}