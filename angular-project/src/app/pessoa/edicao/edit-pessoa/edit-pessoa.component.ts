import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../services/pessoa-service.component';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html'
})

export class EditPessoaComponent implements OnInit {

  pessoa?: Pessoa;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pessoaService: PessoaService){ }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.pessoaService.obterPeloId(params['id']).subscribe((response) => { this.pessoa = response });
      })
  }

  salvar(){
    //comunicação com backend;

    this.router.navigate(["pessoa/"]);
  }

}
