import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent{
  nome = "Alisson";
  data1 = new Date('2021-04-23T10:00:00.000');
  formatDate = 'dd/MM/yyyy HH:mm';

  mostrarNascimento(){
    alert(`A data de nascimento é:  ${ this.data1 }`);
  }
}
