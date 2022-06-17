import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-lista',
  templateUrl: './renderizando-lista.component.html',
  styleUrls: ['./renderizando-lista.component.css']
})
export class RenderizandoListaComponent {
  celulares: Celular[] = [
    {id: 1, nome:"Moto Edge 20", descricao:"Custo Beneficio mas a camera inferior", esgotado:true},
    {id: 2, nome:"Moto Edge 20 Pro", descricao:"Top de linha camera melhorada", esgotado:false},
    {id: 3, nome:"Samsung S21 FE", descricao:"Custo beneficio e camera melhorada", esgotado:false}
  ]
}


