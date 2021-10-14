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
            cpf: "178.060.877-29",
            dataNascimento: new Date(1998, 1, 27)
        },
        {
            id: 2,
            nome: "Cláudio Tavares",
            cpf: "060.851.900-19",
            dataNascimento: new Date(1965, 6, 13)
        },
        {
            id: 3,
            nome: "Patrícia Sampaio",
            cpf: "195.899.103-29",
            dataNascimento: new Date(1976,1,14)
        }
        ]
    }

    obterTodos(estado: string){
        if(estado === 'homens'){
            return this.pessoas.filter(pessoa => pessoa.id !== 3);
        }

        return this.pessoas;
    }

    obterPeloId(id: number) {
        return this.pessoas.find(pessoa => pessoa.id == id);
    }
}