import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";

@Injectable()
export class PessoaService{
    pessoas?: Observable<Pessoa[]>;

    constructor(private http: HttpClient){
        
    }

    obterTodos() : Observable<Pessoa[]>{
        return this.http.get<Pessoa[]>('https://localhost:44337/api/Pessoa');
    }

    obterPeloId(id: number) : Observable<Pessoa> {
        return this.http.get<Pessoa>('https://localhost:44337/api/Pessoa/' + id);
    }
}