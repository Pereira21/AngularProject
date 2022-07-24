import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa-service.component';

@Component({
  selector: 'app-cad-pessoa',
  templateUrl: './cad-pessoa.component.html'
})
export class CadPessoaComponent implements OnInit {

  formGroup: FormGroup;
  pessoa: Pessoa;

  constructor(private formBuilder: FormBuilder, 
    private pessoaService: PessoaService,
    private router: Router) { 
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      altura: [''],
      dataNascimento: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // cpf: [''],
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
