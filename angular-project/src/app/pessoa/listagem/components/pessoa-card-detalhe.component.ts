import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Pessoa } from "../../model/pessoa";

@Component({
    selector: 'app-pessoa-card-detalhe',
    templateUrl: 'pessoa-card-detalhe.component.html'
})

export class PessoaCardDetalheComponent{
    @Input()
    pessoa: Pessoa = new Pessoa();

    @Output()
    id: EventEmitter<number> = new EventEmitter();

    constructor() { 
        
    }

    excluirPessoa(id: number){
        this.id.emit(id);
    }
}