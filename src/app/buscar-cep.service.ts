import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarCepService {

  baseUrl: String = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  buscarCep(cep: string):Observable<Cep>{
    const url = `${this.baseUrl}/${cep}/json/`
    return this.http.get<Cep>(url)
  }


}

export class Cep{
cep? : string
logradouro?: string
complemento?: string
bairro?: string
localidade?: string
uf?: string
ibge?: string
gia?: string
ddd?: string
siafi?: string
}