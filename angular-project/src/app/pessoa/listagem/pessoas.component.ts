import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pessoa } from "../model/pessoa";

@Component({
    selector: 'app-list-pessoa',
    templateUrl: './pessoas.component.html'
  })

export class PessoaComponent implements OnInit{
    pessoas?: Pessoa[];
    
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.pessoas = this.route.snapshot.data['pessoas'];
    }

    excluirPessoa(id: number){
        console.log("O id é " + id);
    }
}