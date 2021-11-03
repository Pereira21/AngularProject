import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";
import { PessoaService } from "../services/pessoa-service.component";

@Component({
    selector: 'app-list-pessoa',
    templateUrl: './pessoas.component.html'
  })

export class PessoaComponent implements OnInit{
    pessoas?: Pessoa[];
    
    constructor(
        private pessoaService: PessoaService,
        private router: Router) {
        pessoaService.obterTodos().subscribe((response) => { this.pessoas = response });
     }

    ngOnInit(): void {
        
    }

    excluirPessoa(id: number){
        this.pessoaService.remover(id).subscribe();
        window.location.reload();
    }
}