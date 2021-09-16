import { Component, OnInit } from "@angular/core";
import { Pessoa } from "../model/pessoa";

@Component({
    selector: 'app-list-pessoa',
    templateUrl: './pessoas.component.html'
  })

export class PessoaComponent implements OnInit{
    pessoas?: Pessoa[];
    constructor() { }

    ngOnInit(): void {
        this.pessoas = [{
            id: 1,
            nome: "Lucas Pereira",
            altura: 1.88,
            cpf: "178.060.877-29"
        },
        {
            id: 2,
            nome: "Cláudio Tavares",
            cpf: "060.851.900-19"
        },
        {
            id: 3,
            nome: "Patrícia Sampaio",
            cpf: "195.899.103-29"
        }
    ]
    }
}