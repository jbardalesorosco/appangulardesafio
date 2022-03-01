import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipocambioService {

  constructor(private readonly http: HttpClient) { }

  __getTipoCambio(params : any){
    return this.http.get('http://localhost:8080/moneda/api/cambio/realizarcambio' + params);
  }
}
