import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Pessoa } from "../model/pessoa";
import { PessoaService } from "./pessoa-service.component";

// @Injectable()
// export class PessoaResolve implements Resolve<Pessoa[]>{

//     constructor(private pessoaService: PessoaService){}

//     resolve(route: ActivatedRouteSnapshot){
//         return this.pessoaService.obterTodos(route.params.estado);
//     }
// }