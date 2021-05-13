import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  altura = new FormControl('');

  peso = new FormControl('');

  imc = new FormControl('');

  updateIMC() {
    this.imc.setValue(Number(this.peso.value)/(Number(this.altura.value)*Number(this.altura.value)));
  }

  constructor() { }

  ngOnInit(): void {
      this.altura.valueChanges.subscribe(val=>{
        this.updateIMC();
      });
      this.peso.valueChanges.subscribe(val=>{
        this.updateIMC();
      });
  }

}
