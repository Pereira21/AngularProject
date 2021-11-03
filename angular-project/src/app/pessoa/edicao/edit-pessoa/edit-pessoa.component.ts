import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../services/pessoa-service.component';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html'
})

export class EditPessoaComponent implements OnInit {

  formGroup: FormGroup;
  pessoa: Pessoa;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder)
    { 
      this.route.params
      .subscribe(params => {
        this.pessoaService.obterPeloId(params['id']).subscribe((response) => { 
          this.pessoa = response;
          this.formGroup = formBuilder.group({
            nome: [this.pessoa.nome, Validators.required],
            altura: [this.pessoa.altura],
            dataNascimento: [this.pessoa.dataNascimento, Validators.required]
          });
        });
      })
    }

  ngOnInit(): void {
    
  }

  submitEditPessoa(){
    if(this.formGroup.valid){
      this.pessoa = Object.assign({}, this.pessoa, this.formGroup.value);
      this.pessoaService.editar(this.pessoa.id, this.pessoa).subscribe((response) => {
        this.router.navigate(["/pessoa"]);
      });
    }
  }
}
