import { Injectable } from "@angular/core";
import { Pessoa } from "../model/pessoa";

@Injectable()

export class PessoaService{
    pessoas: Pessoa[];

    constructor(){
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

    obterTodos(){
        return this.pessoas;
    }

    obterPeloId(id: number) {
        return this.pessoas.find(pessoa => pessoa.id == id);
    }
}