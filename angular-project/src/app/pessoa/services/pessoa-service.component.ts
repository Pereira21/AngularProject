import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";

@Injectable()
export class PessoaService{
    pessoas?: Observable<Pessoa[]>;
    urlService = 'https://localhost:44337/api/Pessoa/';

    constructor(private http: HttpClient){
        
    }

    obterTodos() : Observable<Pessoa[]>{
        return this.http.get<Pessoa[]>(this.urlService);
    }

    obterPeloId(id: number) : Observable<Pessoa> {
        return this.http.get<Pessoa>(this.urlService + id);
    }

    cadastrar(pessoa: Pessoa) : Observable<Pessoa>{
        return this.http.post<Pessoa>(this.urlService, pessoa);
    }

    editar(id: number, pessoa: Pessoa) : Observable<Pessoa>{
        return this.http.put<Pessoa>(this.urlService + id, pessoa);
    }

    remover(id:number) : Observable<Pessoa>{
        return this.http.delete<Pessoa>(this.urlService + id);
    }
}