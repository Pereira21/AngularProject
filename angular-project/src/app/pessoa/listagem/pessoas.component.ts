import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";
import { PessoaService } from "../services/pessoa-service.component";

@Component({
    selector: 'app-list-pessoa',
    templateUrl: './pessoas.component.html'
  })

export class PessoaComponent implements OnInit{
    pessoas$?: Observable<Pessoa[]>;
    
    constructor(private pessoaService: PessoaService) {
        this.pessoas$ = pessoaService.obterTodos();
     }

    ngOnInit(): void {
        
    }

    excluirPessoa(id: number){
        console.log("O id é " + id);
    }
}