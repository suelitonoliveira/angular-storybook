import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BuscarCepService, Cep } from 'src/app/buscar-cep.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.html',
  styles: [
    `
    :host {
      text-align: center;
      background: white;
      display: block;
      padding: .45rem .65rem;
      border-radius: 3px;
      max-width: 325px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
h2 {
  color: #c85f7f;
}

p {
  text-align: center;
}  `
  ]
})
export default class BuscarCepComponent {

    cepRetorno?: Cep
    /**
   * Is this the principal call to action on the page?
   */
  @Input('cep') cep: any;
  @Input('subtitle') subtitle: any;
  @Input('content') content = '😄';
  @Output() btnClicked = new EventEmitter<boolean>();

  constructor(private buscarCepService: BuscarCepService){}

  buscaCep(cep: any){
    this.buscarCepService.buscarCep(cep).subscribe(
        resp => {
            this.cepRetorno = resp
        }
    )
  }
}