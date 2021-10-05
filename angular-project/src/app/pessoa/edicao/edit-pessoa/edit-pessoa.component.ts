import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../services/pessoa-service.component';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html'
})

export class EditPessoaComponent implements OnInit {

  pessoa?: Pessoa;
  constructor(private route: ActivatedRoute, private pessoaService: PessoaService){ }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.pessoa = this.pessoaService.obterPeloId(params['id']);

        console.log(this.pessoa);
      })
  }

}
