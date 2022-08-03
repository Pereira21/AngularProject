import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa-service.component';

@Component({
  selector: 'app-cad-pessoa',
  templateUrl: './cad-pessoa.component.html'
})
export class CadPessoaComponent implements OnInit {

  public formGroup: FormGroup;
  public pessoa: Pessoa;
  public MASKS = MASKS;

  constructor(private formBuilder: FormBuilder, 
    private pessoaService: PessoaService,
    private router: Router) { 
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      altura: [''],
      dataNascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      // rg: ['']
    });
  }

  submitPessoa(){
    if(this.formGroup.valid){
      this.pessoa = Object.assign({}, this.pessoa, this.formGroup.value);
      this.pessoaService.cadastrar(this.pessoa).subscribe((response) => { this.pessoa = response });

      this.router.navigate(["/pessoa"]);
    }
  }
}
