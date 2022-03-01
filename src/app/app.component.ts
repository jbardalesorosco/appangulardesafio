import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TipocambioService } from './services/tipocambio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cambiomoneda';

  monedaCambio: any = [];
  cambioResultado : any = "";

  monedaForm = this.formMoneda.group({
    monto: ['', Validators.required],
    monedaOrigen : "soles", 
    monedaDestino: ['', Validators.required]
  });

  constructor(private formMoneda: FormBuilder,
    private readonly moneda: TipocambioService) { }

  __getproyectById(monto: any, monedaorigen: string, monedadestino: string){
    const params = "?monto=" + monto + "&monedaorigen=" + monedaorigen + "&monedadestino=" + monedadestino;
    this.moneda.__getTipoCambio(params).subscribe((rest: any) => {
      this.monedaCambio = rest;
      //console.log(this.monedaCambio);
      //console.log(this.monedaCambio.cambio.montoCambio);
      this.cambioResultado = this.monedaCambio.cambio.montoCambio;
    });

  }

  onSubmit(){
    if(this.monedaForm.valid){
      //console.log(this.monedaForm.value);
      //alert("Formulario  valido");
      this.__getproyectById(this.monedaForm.value.monto, this.monedaForm.value.monedaOrigen, this.monedaForm.value.monedaDestino);

    } else {
      alert("Formulario no valido");

    }
    
  }

}


