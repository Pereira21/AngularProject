import { Component, Input } from "@angular/core";
import { Pessoa } from "../../model/pessoa";

@Component({
    selector: 'app-pessoa',
    templateUrl: 'pessoa.component.html'
})

export class ListPessoaComponent{
    @Input()
    pessoa?: Pessoa;

    constructor() { 
        console.log(this.pessoa);
        console.log("this.pessoa");
    }
}